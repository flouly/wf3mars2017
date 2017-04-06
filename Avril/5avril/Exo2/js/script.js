
$(document).ready(function(){


    // fonction pour les comopetences
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
            $('#modal').fadeIn();
        });

        // Fermer la modal au click sur .fa-times
        $('.fa-times').click(function(){
            $('#modal').fadeOut();
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
    
    // 
    $('nav a').click(function(evt){

        // Bloquer les balises a
         evt.preventDefault();

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
            });

        }); 
        });
    });



        
        



}); // Fin