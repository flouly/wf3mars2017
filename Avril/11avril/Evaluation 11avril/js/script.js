$(document).ready(function(){


    // Enlever la bordure d'erreur quand on clique sur le selecteur ou le textarea
    $(' textarea, select').focus(function(){

        $(this).removeClass('error');
    });

        // Afficher la photo du chat pour chaque selection
      $('select').change(function(){


        if($(this).val() == 'chat1'){
            $('article img').attr('src', 'img/chat_1.jpg');

        } else if($(this).val() == 'chat2'){
            $('article img').attr('src', 'img/chat_2.jpg');

        } else if($(this).val() == 'chat3'){
            $('article img').attr('src', 'img/chat_3.jpg');

        } else if($(this).val() == 'chat4'){
            $('article img').attr('src', 'img/chat_4.jpg');

        } else if($(this).val() == 'chat5'){
            $('article img').attr('src', 'img/chat_5.jpg');

        } else {
            $('article img').attr('src', 'img/chat_0.jpg');
        }

    });


    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Blocage de l'evenement de soumission
        evt.preventDefault();

        // Variables globales
        
        var userChoice = $('#userChoice');
        var userMessage = $('#userMessage');

        var scoreForm = 0 ;

        if(userChoice.val() == 'null'){
            userChoice.addClass('error');
        } else{
            scoreForm++;
        };
            
        if(userMessage.val().length < 16){
            userMessage.addClass('error');
        } else{
            scoreForm++;
        };

        if(scoreForm == 2){

            // Envoyer le formulaire  au serveur
            // Reponse true

            // Vider le formulaire

            $('form')[0].reset();


        };



    });















}); //Fin de l'attente de fermeture de la fonction de chargement