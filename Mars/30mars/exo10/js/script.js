// Attendre le chargement du DOM
$(document).ready(function(){



    // Manipuler le contenu texte du footer
    console.log($('footer').text());
    $('footer').text('Sous la license MIT');


    // Manipuler le contenru HTML du footer
    console.log($('footer').html());

    $('footer').html('Sous la licence <b>MIT</b>');



    // Creer des objets pour la page d'accueil
    var homeContent = {
        title: 'Bienvenu sur mon site',
        content: 'Je suis le texte de la  page <b>Accueil</b>'
    }

     var portfolioContent = {
        title: 'Bienvenu sur mon Portfolio',
        content: 'Je suis le texte de la  page <b>Portfolio</b>'
    }

     var contactContent = {
        title: 'Bienvenu sur la page Contact',
        content: 'Je suis le texte de la  page <b>Contact</b>'
    }



   

    
    // capter le click sur le premier li
    $('li:first').click(function(){

        // Modifier le contenu de la balide h2
        $('h2').text(homeContent.title);

        // Modifier le contenu de la balise p
        $('p').html(homeContent.content);

    });





}); //Fin del a fincrion de 