from django.conf.urls.defaults import *

urlpatterns = patterns('',
    ('^$', 'views.default'),
    ('^success/', 'views.success'),
)
