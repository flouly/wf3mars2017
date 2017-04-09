$(document).ready(function(){


   
        // Mettre les label au dessus des inputs
        $('input:not([type="submit"]), textarea').focus(function(){
            $(this).prev().addClass('moveLabel hidden');
        });

        //  Remettre les labels a leur place
        $('input, textarea').blur(function(){

            if($(this).val().length == 0){

            $(this).prev().removeClass();

            };

        });

    
    

    $('form').submit(function(evt){

        evt.preventDefault();

        // variable globale
        var userName = $('input').val();
        var userMessage = $('textarea').val();

        var formScore = 0;


        if(userName.length == 0){
            $('#userName').prev().children('b').text('Minimum 1 caractere');
        } else{
            formScore++;
        };

        if(userMessage.length < 5){
            $('#userMessage').prev().children('b').text('Minimum 5 caractere');
        } else{
            formScore++;
        };

        if(formScore == 2){
            
            $('section:last').append('<article><h4>' + userMessage + '</h4><p>' + userName + '</p></article>');
             
            //  Vider le formulaire
            $('input:not([type="submit"])').val('');
            $('textarea').val('');

            $('label').removeClass(); 
        };
      
   
     });  
    
    




}); //Fin