
var schemes = {};

schemes['groundcontrol'] = ['#2B2E2E', //deep grey
                            '#595855', //iron grey
                            '#A2ABA5', //grey
                            '#CAE6E8', //light blue
                            '#313F54', //navy
                            ];
schemes['hip1'] =   [       //HIP 1: aka maritime
                            '#132536', // dark-blue
                            '#5A6672', // grey-blue
                            '#B9A063', // tan
                            '#F4F3EF', // almost white
                            '#FFFFFF', // white
                            ];
schemes['citizenkane'] = [ //citizen kane                            
                            '#262120', //brown
                            '#869C6A', // mid green
                            '#ABAA85', //tan
                            '#3A4C45', //green
                            '#DAFFA3', //lighter green
                        ];
schemes['orangeshell'] = [ //orange shell
                            '#A92C10', //orange
                            '#A2ABA5',
                            //'#FFFFFF', //'#495C65', //blue-iron
                            '#B6A682', //tan
                            '#474539', //brown-iron
                            '#2C353E', //navy
                        ];
schemes['drops'] = [        //drops
                            '#6E414F', //violet
                            '#F9EFCC', //yellow-white
                            '#9F8686', //lighter violet
                            '#E0C78E', //dull yellow
                            '#A9C7C9', //baby blue
                        ];
schemes['saffron'] = [      //saffron
                            '#273740', //navy
                            '#F2D194', //tan
                            '#BF6B04', //goldenrod orange
                            '#872702', //blood orange
                            '#550A03', //deep red
                        ];


function changecolor(colorNum) {
    //alert(colorNum);
    var color1 = $("#" + colorNum).val();
    
    $("." + colorNum + ".backgroundcolor").css("background-color", color1);    
    $("." + colorNum + ".textcolor").css("color", color1);
    $("." + colorNum+".bordercolor").css("border-color", color1);
}

function loadScheme(name) {
    //alert(colorNum);    
    for (i=1;i<=5;i++) {
        $("#color" + i).val(schemes[name][i-1]);
        changecolor("color" + i);
    }
}



       /* extra backgrounds...  background:
       		dark brown: #3C1700;
       		darker poop brown: #2d1100
       		nice soft brown: #7D775C
       		tan/sand: #edefd0
       		grey: #555753
       		blue blue: #0000FF
       		green: #009933 
       		*/
