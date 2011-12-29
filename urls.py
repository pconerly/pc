
from django.conf.urls.defaults import *
from django.contrib import admin
from django.views.generic.simple import redirect_to

from mezzanine.core.views import direct_to_template
from mezzanine.pages.views import page

admin.autodiscover()

def home_page(request):
    request.path = "/"
    return page(request, "home")
    
# Add the urlpatterns for any custom Django applications here.
# You can also change the ``home`` view to add your own functionality to
# the project's homepage.
urlpatterns = patterns("",
    ("^admin/", include(admin.site.urls)),
    #url("^$", direct_to_template, {"template": "index.html"}, name="home"),
    url("^$", home_page, name="home"),
    ("^home-page/$", redirect_to, {'url':'/', 'permanent': True}),
    # ADD YOUR OWN URLPATTERNS *ABOVE* THE LINE BELOW.
    # ``mezzanine.urls`` INCLUDES A *CATCH ALL* PATTERN
    # FOR PAGES, SO URLPATTERNS ADDED BELOW ``mezzanine.urls``
    # WILL NEVER BE MATCHED!
    ("^", include("mezzanine.urls")),
)

# Adds ``MEDIA_URL`` to the context.
handler500 = "mezzanine.core.views.server_error"
