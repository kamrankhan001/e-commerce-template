$(document).ready(function(){

    $("#hamburger").click(function(){
        $("#links").toggleClass("translate-x-full");
        $('#topline').toggleClass("transform -rotate-45 mt-1 mb-1");
        $('#bottomline').toggleClass("transform rotate-45");
        $('#midline').toggleClass("hidden");
    });

});