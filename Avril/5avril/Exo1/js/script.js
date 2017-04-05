$(document).ready(function(){


    // Capter le click sur le premier button
    $('button:first').click(function(){


        // Charger le contenu de views/about.html dans la premiere section du main
        $('section').eq(0).load('views/about.html', function(){

                // Fonction de callback de la Fonction load();

                console.log('le fichier about est charger');

                // Animer la premiere section
                // $('section:first').eq(0).fadeIn();

                });

    });


        // Capter le click sur le deuxieme bouton
        $('button').eq(1).click(function(){


        // Charger dans la deuxieme section de contenu de views/content.html
        $('section').eq(1).load('views/content.html #portfolio');



        });
    

         // Capter le click sur le troisieme bouton
        $('button').eq(2).click(function(){


        // Charger dans la troidieme section de contenu de views/content.html
        $('section').eq(2).load('views/content.html #contacts', function(){   

        // Appeller la fonction submitForm
        submitForm();


        });

    });
    

    // Creer une Fonction pout capter la soumission du formulaire
    function submitForm(){
        // Capter la soumission du formulaire
        $('form').submit(function(evt){
            evt.preventDefault();
            console.log('submit du formulaire');

            var formScore = 0;


            // Minimum 4 caracteres pour l'email et 5 caracteres pour le message
            if(

                $('[type="email"]').val().length < 4
            ){

                console.log('Email manquant');
            } else{
                console.log('Email ok');
                formScore++;
            };

            if(
                $('textarea').val().length < 5
            ){
                console.log('Message manquant');
            } else{
                console.log('Message ok');
                formScore++;
            };

            // Verifier la  valeut de formScore
            if(formScore == 2){
                console.log('Le formulaire est valide!');

                // Envoi des donnees vdrs le fichier de traitement php
                // Php repond true

                // Ajouter le message dans la balise  aside
                $('aside').append('<h3>' + $('textarea').val() + '</h3><p>' + $('[type="email"]').val() + '</p>');

                // Reset du formulaire
                $('form')[0].reset();
            };

        });
    };









}); //Fin