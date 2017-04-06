
$(document).ready(function(){


    // fonction pour les competences
    function mySkills(paramEq, paramWidth){

        //Animation des balises p des mySkills
        $('h3 + ul').children('li').eq(paramEq).find('p').animate({

            width: paramWidth
        });

    };

    // Creer une fonction pour ouvrir la modal
    function openModal(){

        // Ouvrir la modal au click sur les boutons
        $('button').click(function(){

            // Afficher le titre du projet
            var modalTitle = $(this).prev().text()
            $('#modal span').text(modalTitle);

             var modalImage = $(this).parent().prev().attr('src')
             $('#modal img').attr('src', modalImage ).attr('alt, modalTitle');


            $('#modal').fadeIn();
        });

        // Fermer la modal au click sur .fa-times
        $('.fa-times').click(function(){
            $('#modal').fadeOut();
        });
    };

    // Creer une fonction pour la gestion du formulaire
    function contactForm(){

            // Capter le focus sur les input
            $('input, textarea').focus(function(){
                // Selectionner la balise precedente pour ajouter la class openLabel
                $(this).prev().addClass('openedLabel');
            });

            // Capter le blur sur les input et textarea(sortir du focus)
            $('input, textarea').blur(function(){

                // Verifier si il n'y a pas de caracteres dans le input
                if($(this).val().length == 0){

                // selectionner la balise precedente pour supprimer openedLabel
                $(this).prev().removeClass();

                };

            });

    };

    // Charger le contenu de home.html dans le main
         $('main').load('views/home.html');


    /*
    Burger menu
    */
    $('h1 + a').click(function(evt){

        evt.preventDefault();

        $(' nav').slideToggle();

    });
    
    // Burger menu navigation
    $('nav a').click(function(evt){

        // Bloquer les balises a
         evt.preventDefault();

        //  Creer une variable pour recuperer la valeur de l'attribut
         var viewToLoad = $(this).attr('href');

        //  masquer le main
        $('main').fadeOut();

        // Fermer  le Burger menu
         $('nav').slideUp(function(){

        // Charger la vue 
        console.log('vous voule afficher la vue :'  + viewToLoad);

        // Charger la bonne vue puis afficher le main
        $('main').load('views/' + viewToLoad, function(){

            $('main').fadeIn(function(){

                // Verifier si l'utilisateur veux voir la page about.html(sinon mySkills viens sur toutes les pages)
                 if(viewToLoad == 'about.html'){
                //Appeler la fonction mySkills
                 mySkills(0, '80%');
                 mySkills(1, '60%');
                 mySkills(2, '40%');
                };


                // Verifier si l'utilisareur est sur la portfolio
                if(viewToLoad == 'portfolio.html'){

                    // Appeler la function pour ouvrir la modal
                    openModal();

                }


                // Verifier si l'utilisateur est sur la page contactForm
                if(viewToLoad == 'contacts.html'){

                    contactForm();
                }
            });

        }); 
        });
    });



        
        



}); // Fin