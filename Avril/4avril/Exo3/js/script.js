$(document).ready(function(){

    $('h3').click(function(){

        // Fermer la balise suivant .open
        $('.open').not(this)
        .next().slideUp()
        .prev().removeClass('open')
        .children('.fa').toggleClass('fa-arrow-right').toggleClass('fa-times');

        //Faire un toggle de la class open sur la balise h3
        $(this).toggleClass('open');

        // Afficher dans la comsole la valise suivante
        $(this).next().slideToggle();

        // Selectionner la balise .fa pour supprimer  la class .fa-arrow-right
        $(this).children('.fa').toggleClass('fa-arrow-right').toggleClass('fa-times');

    });



}); //Fin de la fonction d' attente de fermeture du DOM