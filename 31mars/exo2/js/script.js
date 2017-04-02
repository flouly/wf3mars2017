// Attendre le chargement du DOM
$(document).ready(function(){

    // Supprimer la  class active de la balise h1
    $('h1').removeClass('active');


    // Ajouter une class sur la balise selectionnee
    $('h2').addClass('active');

    // Ajouter ou Supprimer la class sur la balise lorsqu' on clique sur la balise h2
    $('h2').click(function(){

        $('p').toggleClass('hidden');
    });





}); //FIN de la fonction du chargement du DOM