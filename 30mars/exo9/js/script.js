// Capter l'evenement ready pour y ajouter une fonction de call back
$(document).ready(function(){


    // Capter l'evenement focus sur le textarea
    $('textarea').focus(function(){


        console.log('Minimun 10 caracteres');

    });

    // capter l'elevenment blur sur le textarea
    $('textarea').blur(function(){

        console.log('L\'utilisateur est sorti de focus');

    });

    // Capter l'evenement scroll sur le header
    $('header' ).scroll( function(){

        console.log('Scroll');

    });

    // Capter l'evenement hover sur le main
    $('main').hover(function(){

        console.log('L\'utilisateur est au dessus du main');
    });


    // Capter l'evenement click sur la balise ajouter
    $('a').click(function(evt){

        // Empecher le comportement naturel dela balise ajouter
        evt.preventDefault();


        console.log('Click sur la balise a')

    });

    // Capter la soumission du formulaire
    $('form').submit(function(evt){

            // Bloquer le comportement naturel du formulaire
            evt.preventDefault();


            console.log('Verifier les inputs/textarea avant de les envoyer au fichier de traitement')

    });



}); //Fin de la fonction d'attente de chargement  du DOM