
$(document).ready(function(){

    console.log('document');

    //Burger menu

    $('.homePage h1 + a').click(function(evt){

        evt.preventDefault();

        $('.homePage nav').slideToggle();

    });
    
    // 
    $('.homePage nav a').click(function(evt){

        // Bloquer les balises a
         evt.preventDefault();

         var linkToOpen = $(this).attr('href');

        //  Fermer  le Burger menu
         $('.homePage nav').slideUp(function(){

          window.location = linkToOpen;
         });

        });
        


    // about homePage

        // Capter le click sur le Burger menu
        $('.aboutPage h1 + a').click(function(evt){


            evt.preventDefault();

            $('.aboutPage nav').animate({

                left: '0'

            });



        });

        $('.aboutpage nav a').click(function(evt){

        // Bloquer les balises a
         evt.preventDefault();

         var linkToOpen = $(this).attr('href');

        //  Fermer  le Burger menu
         $('.aboutPage nav').animate({

            left: '-100%'

            


         }, function(){

            //  changer de page 
            window.location = linkToOpen;

        });
        

         });





}); // Fin