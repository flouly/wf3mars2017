$(document).ready(function(){

    $('h3').click(function(){

        $('.open').not(this).next().slideUp().prev().removeClass('open').children('fa').toggleClass('fa-arrow-right').toggleClass('fa-times');



        $(this).toggleClass('open');

        $(this).next().slideToggle();

        $(this).children('.fa').toggleClass('fa-arrow-right').toggleClass('fa-times');

    });












}); //Fin