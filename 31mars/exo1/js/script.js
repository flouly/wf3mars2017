// Attendre le chargement du DOM
$(document).ready(function(){
    
    // Creer une variable string pour le titre principale
    var siteTitle = "Fred <span> Etudiant</span>";

    // Creer un tableau pour la nav
    var myNav = ['Accueil', 'Portfolio', 'Contacts'];



    // Creer un objet pour les titres des pages
    var  myTitles = {
        Accueil: 'Bienvenu sur la page d\'accueil',
        Portfolio: 'Decouvrez mes travaux',
        Contacts: 'Contactez moi pour plus d\'information'
    }

    // Creer un objet pour le contenu des pages
    var myContent = {
        Accueil: '<h3>Contenu de la page Accueil</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda beatae iure aliquid necessitatibus quis, ipsum laborum obcaecati voluptas quibusdam error vero minima. Illo sapiente libero laudantium voluptates, ad nobis.</p>',
        Portfolio: '<h3>Contenu de la page Portfolio</h3> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda beatae iure aliquid necessitatibus quis, ipsum laborum obcaecati voluptas quibusdam error vero minima. Illo sapiente libero laudantium voluptates, ad nobis.</p>',
        Contacts: '<h3>Contenu de la page Contacts</h3><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda beatae iure aliquid necessitatibus quis, ipsum laborum obcaecati voluptas quibusdam error vero minima. Illo sapiente libero laudantium voluptates, ad nobis.</p>'
    }

    // Selectionner le header et le mettre dans une variable
    
    var myHeader = $('header');

    console.log(myHeader);

    // Generer  une balise h1 dans le header avec le contenu de la variable siteTitle
    myHeader.append('<h1>' + siteTitle + '</h1>');

    // Generer une balise nav + ul dans le header
    myHeader.append('<nav><i class="fa fa-bars" aria-hidden="true"></i><ul></ul></nav>')

    // Faire une boucle sur nav pour generer les liens de la nav
    for(var i = 0; i < myNav.length; i++){

        // Verifier que la boucle fonctionne
        console.log(myNav[i]);
        // Generer des balises html
        $('ul').append('<li><a href="'+ myNav[i] +'">' + myNav[i] + '</a></li>');


    };

    // Afficher dans le main le titre issu de l'objet myTitles
    var myMain = $('main');
    myMain.append('<h2>' + myTitles.Accueil + '</h2>');
    myMain.append('<section>' + myContent.Accueil + '</section>');

    // Capter l'evenenent  click sur les balises a en bloquant le comportement naturel des balises a
    $('a').click(function(evt){

        // Bloquer le comportement naturel des balises a
        evt.preventDefault();

        // Connaitre l'occurrence de la balise a sur laquelle l'utilisateur a clique
        console.log($(this));

        // Recuperer la  valeur de l'attribut href
        console.log($(this).attr('href'));

        // Verifier la valeur  de l'attribut href pour afficher le bon titre
        if($(this).attr('href') == 'Accueil'){
            console.log('Vous etes sur la page Accueil');

            // Selectionner la balise h2 pour changer son contenu
            $('h2').text(myTitles.Accueil);

            // Selectionner la section pour changer le contenu
            $('section').html(myContent.Accueil);

        } else if ($(this).attr('href') == 'Portfolio'){
            console.log('Vous etes sur la page Portfolio');

            // Selectionner la balise h2 pour changer son contenu
            $('h2').text(myTitles.Portfolio);

            // Selectionner la section pour changer le contenu
            $('section').html(myContent.Portfolio);

        } else{
            console.log('Vous etes sur la page Contacts');

            // Selectionner la balise h2 pour changer son contenu
            $('h2').text(myTitles.Contacts);

                 // Selectionner la section pour changer le contenu
            $('section').html(myContent.Contacts);
        };


    });






}); //FIN de la fonction du chargement du DOM