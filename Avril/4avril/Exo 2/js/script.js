$(document).ready(function(){

    // fonction fadeOut()
    $('section').eq(0).children('button').click(function(){

        $('section').eq(0).children('article').fadeOut(2000);
    });


    // fonction fadeIn()
    $('section').eq(1).children('button').click(function(){

        $('section').eq(1).children('article').fadeIn(2000);
    });

    // fonction fadeToggle()

    $('section').eq(2).children('button').click(function(){

        $('section').eq(2).children('article').fadeToggle(2000);
    });

    // Function slideUp()

    $('section').eq(3).children('button').click(function(){

        $('section').eq(3).children('article').slideUp(500);
    });

    // Fonction slideDown

     $('section').eq(4).children('button').click(function(){

        $('section').eq(4).children('article').slideDown(500);
    });



}); //Fin de la fonction d' attente de fermeture du DOM