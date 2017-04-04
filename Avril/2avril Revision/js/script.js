
$(document).ready(function(){


    // Creer une variable string pour le titre du site
    var siteTitle = 'Frederic Louly<span>Developpeur Web</span>';

    // Creer une variable tableau pour la nav
    var myNav = ['Accueil', 'Portfolio', 'Contacts'];

    // Creer un variable objet pour les titres des pages
    var myTitle = {
        Accueil: 'Bienvenu sur la  page d\'accueil',
        Portfolio: 'Decouvrez mes travaux',
        Contacts: 'Contactez moi pour plus d\'information'
    };

    // Creer une variable objet pour le contenu des pages
    var myContent = {
        
       Accueil: '<h3>Contenu de la page Accueil</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ut omnis. Impedit ipsum non minima, doloribus quia animi amet voluptate, quo quas dolore quis ipsam, ex natus ullam, debitis sed.</p>',
        Portfolio: '<h3>Contenu de la page Portfolio</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ut omnis. Impedit ipsum non minima, doloribus quia animi amet voluptate, quo quas dolore quis ipsam, ex natus ullam, debitis sed.</p>',
        Contacts: '<h3>Contenu de la page Contacts</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, ut omnis. Impedit ipsum non minima, doloribus quia animi amet voluptate, quo quas dolore quis ipsam, ex natus ullam, debitis sed.</p>'  

    };

/*
Mise en place du header
*/
    // Creer une variable pour la balise header
    var  myHeader = $('header');

    // Générer une balise H1 dans le header avec le contenu de la variable siteTitle
    myHeader.append('<h1>' + siteTitle + '</h1>');

     // Générer une balise nav + ul dans le header
    myHeader.append('<nav><i class="fa fa-bars" aria-hidden="true"></i><ul></ul></nav>');


    // Activer  le burgerMemu au click sur le fa-bars
    $('.fa-bars').click(function(){

        $('nav ul').toggleClass('toggleBurger');
    });

    // Faire une boucle sur ma nav pour generer les balise li
    for(var i = 0; i < myNav.length; i++){
        $('ul').append('<li><a href="' + myNav[i] + '">' +  myNav[i] + '</a> </li>');
    };


/*
Mise en place du main
*/

    // Creer une variable pour la balise main
    var myMain = $('main');

    // Creer le titre des pages et leur contenu
    myMain.append('<h2>' + myTitle.Accueil + '</h2>');
    myMain.append('<section>' + myContent.Accueil + '</section>');

  

    // Ajouter la class active sur la première li de la nav
    $('li:first').addClass('active');

    // Capter l'événement click sur les balises a en bloquant le comportement naturel des balise a
    $('a').click(function(evt){


        evt.preventDefault();
























    });




















}); //Fin de l'attente de la fonction de chargement du DOM