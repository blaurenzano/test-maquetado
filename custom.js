$(function() {

        function closecustomBox() {
            $('#nav_mobile').hide();
            }
            $('#nav_mobile').hide();
    
            $("#show_menu").click(function() {
            $("#nav_mobile").fadeIn( "slow" ); 
            //$.when(
                setTimeout(function() {
                closecustomBox();
                $('#nav_mobile').hide();
                }, 3000)
            })

            $(".close").click(function(){
                $("#nav_mobile").hide();
                
            });	
  });