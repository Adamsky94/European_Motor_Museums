$(document).ready(function(){

    /*letterspacing function*/
    function spacing() {
        $(this).animate({
            letterSpacing: "+=5px"
        })
    }

    function spacingoff() {
        $(this).animate({
            letterSpacing: "-=5px"
        })
    }

    const ids = $("#east, #north, #south, #west");

     ids.mouseenter(spacing).mouseleave(spacingoff).css("cursor", "pointer");


  /* Code for animating the parallax section -- https://stackoverflow.com/questions/7672556/how-to-add-an-opacity-fading-effect-to-to-the-jquery-slidetoggle -- */


  $("#east").mousedown(function(){
    $(".east").animate({
            opacity: "toggle",
        }, "fast");
    });

    $("#north").mousedown(function(){
    $(".north").animate({
            opacity: "toggle"
        }, "fast");
    });

    $("#south").mousedown(function(){
    $(".south").animate({
            opacity: "toggle"
        }, "fast");
    });

    $("#west").mousedown(function(){
    $(".west").animate({
            opacity: "toggle"
        }, "fast");
    });

});