$(document).ready(function(){

    // BurgerMenu classique
    $('.fa-bars').click(function(){


        $('nav ul').fadeIn();


    });

    // fermer le Burger 
    $('a').click(function(evt){

        evt.preventDefault();
        $('nav ul').fadeOut(500);


    });



}); //Fin de la fonction d' attente de fermeture du DOM