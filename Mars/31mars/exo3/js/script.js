
$(document).ready(function(){

    // Capter la soumission du formulaire
    $('form').submit(function(evt){


        // Definir une variable pour le score du formulaire
        var formScore = 0;

        // Bloquer le comportement naturel du formulaire
        evt.preventDefault();


         // Connaitre la valeur saisie dans le input par l'utilisateur
        var userName = $('input').val();
        console.log(userName);
        // Connaitre le nombre de caracteres dans la valeur
         console.log(userName.length);

         // Connaitre la valeur saisie dans le textarea par l'utilisateur
        var userMessage = $('textarea').val();
        // Connaitre le nombre de caractères dans la valeur
        console.log(userMessage.length);

        // Verifier la taille de userName (min. 5 caracteres)
        if(userName.length == 0){
            console.log('Champ obligatoire');

            // Afficher un message d'erreur dans le label 
            $('[for="userName"] b').text('Champ obligatoire');


        } else{
            console.log('userName OK');

            formScore++;
        };


         // Verifier la taille de userMessage (min. 5 caracteres)
        if(userMessage.length < 4){
            console.log('Minimum 5 caracteres');
             // Afficher un message d'erreur dans le label
            $('[for="userMessage"] b').text('Minimum 5 caractères');
            


        } else{
            console.log('userMessage OK');

            formScore++;
        };

        
    //   Verifier la valeur de formScore pour calider le formulaire
    if(formScore == 2){

        console.log('Le formulaire est valide')

        // Evoyer les donner dans le fichier php  et attendre lareponse du PHP (true/false)

        // le php repond true!

        // Ajouter le message dans la liste
        $('section:last').append('<article><h4>' + userMessage + '</h4><p>' + userName + '</p></article>');

        // Vider les champs de formulaire
        $('input:not([type="submit"])').val('');
        $('textarea').val('');

    };

    // Supprimer les messages d'erreur
    $('input, textarea').focus(function(){


        $(this).prev().children('b').text('');

    });

    });





}); //Fin de la fonction de chargement