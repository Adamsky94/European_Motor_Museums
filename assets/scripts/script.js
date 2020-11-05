$(document).ready(function(){

    /*collapse logic*/
    const idArray = ["east", "north", "south", "west"];

    idArray.forEach((element) => {
         document.getElementById(element).addEventListener("click", () => {
              Array.from(document.getElementsByClassName(`collapse-data-${element}`)).forEach((element) => {
              element.classList.add("collapsed");
              element.classList.remove("show");
              })
         })
     }) 



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