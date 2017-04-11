$(document).ready(function(){

    $('input, textarea, select').focus(function(){

        $(this).removeClass('error');
    });


    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Blocage de l'evenement de soumission
        evt.preventDefault();

        // Variables globales
        var userName = $('#userName');
        var userEmail = $('#userEmail');
        var userSelect = $('#userSelect');
        var userMessage = $('#userMessage');

        var scoreForm = 0 ;

        if(userName.val().length == 0 ){
            userName.addClass('error');
        } else{
            scoreForm++;
        };
        
        if(userEmail.val().length < 6){
            userEmail.addClass('error');
        } else{
            scoreForm++;
        };

        if(userSelect.val() == 'null'){
            userSelect.addClass('error');
        } else{
            scoreForm++;
        };
            
        if(userMessage.val().length < 6){
            userMessage.addClass('error');
        } else{
            scoreForm++;
        };

        if(scoreForm == 4){

            // Envoyer le formulaire  au serveur
            // Reponse true

            // Vider le formulaire

            $('form')[0].reset();


        };



    });















}); //Fin de l'attente de fermeture de la fonction de chargement