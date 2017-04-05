$(document).ready(function(){


    // Fonction animate()
    $('section:first button').click(function(){
        // Changer la couleur de fond et la hauteur de l'article
        $('section:first article').animate({

            height: '40rem',
            width: '20rem'

        });

    });

        // Fonction animate() valeurs dynamiques
        $('section:nth-child(2) button').click(function(){

          $('section:nth-child(2) article').animate({

            // Pas d'espace entre += et la valeur
            left: '+=1rem',
            top: '-=1rem',
            width: '*=2',
            height: '/=3'

          }); 

    
        });


        //   Fonction animate(): toggle/show/hide
        $('section:nth-child(3) button').click(function(){

            $('section:nth-child(3) article').animate({

                width: 'toggle'


            });

        });


         //   Fonction animate(): toggle/show/hide
        $('section:last button').click(function(){

            $('section:last article').animate({

                width: 'toggle'


            }, 500, function(){
                $(this).hide();
            });

        });








}); //Fin de la fonction d' attente de fermeture du DOM