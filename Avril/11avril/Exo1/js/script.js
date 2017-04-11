$(document).ready(function(){

    // Definir une varriable pour avoir quel box a ete checked
    var boxChecked;

    // UI checkbox
    $('[type="checkbox"]').click(function(){

        // Definir la valeur de la variable
        boxChecked = $(this).val();
        

        var checkboxArray = $('[type="checkbox"]').not($(this))

        for(var i = 0; i < checkboxArray.length; i++){

            // Decocher les checkbox qqui ne m'interesse pas
            checkboxArray[i].checked = false;
        };

        //  Modifier l'mage
        if($(this).val() == 'first'){ 

        $('img').attr('src', 'img/1.jpg');

        }  else if($(this).val() == 'second'){
        $('img').attr('src', 'img/2.jpg');

        } else if($(this).val() == 'third'){
            $('img').attr('src', 'img/3.jpg');

        } else {
            $('img').attr('src', 'img/4.jpg');
        };
    });

    // Capter la soumission du formulaire
     $('form').submit(function(evt){

        evt.preventDefault();

        //Savoir quelle checkbox est selectionner
        // Afficher une modale avec l'image selectionnee
        // Reinitialiser le formulaire

        if(boxChecked == undefined){
            console.log('Vous devez cocher')
        } else {
            // Afficher la modal
            $('#modal').fadeIn();
        };
     });

    









}); //Fin