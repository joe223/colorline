import $ from 'jquery'

$(document).ready(function($){

    $(".btn1").click(function(event){
        $(".hint").css({"display":"block"});
    });

    $(".hint-in3").click(function(event) {
        $(".hint").css({"display":"none"});
    });

    $(".btn2").click(function(event) {
        $(".hintl").css({"display":"block"});
    });


    $(".hintl-in3").click(function(event) {
        $(".hintl").css({"display":"none"});
    });
});