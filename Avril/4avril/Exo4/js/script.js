$(document).ready(function(){

    //    Ouvrir la modal
    $('button').click(function(){
    
        $('section').fadeIn();

    });

    // fermer la modal
    $('.fa').click(function(){
        
        $('section').fadeOut();
        
    });

    // Capter les touches du clavier
    $(document).keyup(function(evt){
        console.log(evt.keyCode);

        if(evt.keyCode == 27){

            $('section').fadeOut();
        }

    });

}); //Fin de la fonction d' attente de fermeture du DOM