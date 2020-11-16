$(document).ready(function(){

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
    
 /* Code from the animate.css documentation -- https://animate.style/#javascript */
    document.documentElement.style.setProperty('--animate-duration', '2s');

});