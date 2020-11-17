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
    
    let map;

    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.061802, lng: 13.488646},
    zoom: 5
    });

});