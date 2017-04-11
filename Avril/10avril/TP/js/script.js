$(document).ready(function(){

    $('.fa').click(function(){

        $('div').fadeOut();

    });

    $('input:not([type="submit"]), textarea').focus(function(){

         $(this).prev().addClass('moveLabel hide');
    });


     $('input, textarea').blur(function(){

         $(this).prev().removeClass('moveLabel hide');
    });
    

    $('form').submit(function(evt){

        evt.preventDefault();

            // Variable globale
        var userName = $('#userName').val();
        var userPhone = $('#userPhone').val();
        var userMessage = $('#userMessage').val();
        var userSelection = $('#userSelection').val();

        var formScore = 0;

        
    
        if(userName.length == 0){

            $('#userName').prev().children('b').text('Champs Obligatoire');
        } else{
            formScore++;
        };
         
        if(userPhone.length < 9){
            $('#userPhone').prev().children('b').text('8 Chiffres Obligatoires');
        } else{
            formScore++;
        };

        if(userPhone.length < 5){
            $('#userMessage').prev().children('b').text('Minimum 4 Caracteres');
        } else{
            formScore++;
        };

        if(userSelection == 'null'){
            $('#userSelection').prev().children('b').text('Selection Obligatoire');
        } else {
            formScore++;
        };

        if(formScore == 4){

            // Vider le formulaire
            $('input:not([type="submit"])').val('');
            $('textarea').val('');
            $('select').val('null');


            // Afficher la modal
            
            $('div span').text(userName);
            $('div b').text(userSelection);
            $('div p:last').text(userMessage);

            $('div').fadeIn();
           
        };

    });






}); //Fin 