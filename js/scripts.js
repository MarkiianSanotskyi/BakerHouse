$(document).ready(function(){
 new WOW().init();
 
 });

$( "a.logo" ).click( function () {
        $( "#header" ).toggleClass( "active" );
    });
	
	$( "a.close" ).click( function () {
		$( "#header" ).removeClass( "active" );
		});
		
		$( ".top-header a.ico-pin" ).click( function () {
        $( "#header" ).toggleClass( "active" );
    });
	
	$( "a.close" ).click( function () {
		$( "#header" ).removeClass( "active" );
		});
	
	 $("#flexiselDemo3").flexisel({
		
        visibleItems: 1,
        animationSpeed: 700,
        autoPlay: false,
        autoPlaySpeed: 8000,            
        pauseOnHover: true,
        enableResponsiveBreakpoints: false,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 1
            },
            tablet: { 
                changePoint:768,
                visibleItems: 1
            }
        }
    });
	
	
 
    
