// Attendre le chargement du DOM
$(document).ready(function(){

    // Creer un tableau pour enregistrer les avatars
    var myTown = [];

    // Verifier le genre de l'avatarAge
     // ils ont deja ume valeur dans l'index
        var avatarWoman = $ ('#avatarWoman');
        var avatarMan = $ ('#avatarMan');
        var avatarGender;

        // avatarWoman capter le click
            avatarWoman.click(function(){

                console.log('Je suis une  ' + avatarWoman.val());
                // Desactiver avatarMan
                avatarMan.prop('checked', false);

                // Modifier la valeur de avatarGender
                avatarGender = avatarWoman.val();

                // Vider le message d'erreur
                $('.labelGender b').text('');

                //  Modifier l'attribut src de #avatarBody
                $('#avatarBody').attr('src', 'img/' + avatarGender + '.png')

            });

        // avatarMan capter le click
            avatarMan.click(function(){

                console.log('Je suis un  ' + avatarMan.val());
                // Desactiver avaterWoman
                avatarWoman.prop('checked', false);

                // Modifier la valeur de avatarGender
                avatarGender = avatarMan.val();

                // Vider le message d'erreur
                $('.labelGender b').text('');

                //  Modifier l'attribut src de #avatarBody
                $('#avatarBody').attr('src', 'img/' + avatarGender + '.png')

            });

    // Supprimer les messages d'erreur
    $('input, select').focus(function(){

        // Selectionner la balise precedente de l'input
        $(this).prev().children('b').text('');

    });

    // Capter l'evenement change() sur les selects
    $('select').change(function(){

        
        console.log($(this).attr('id') + ' change: '  + $(this).val());

        // Condition if pour modifier la valeur src de avartarTop ou avatarBottom
        if($(this).attr('id') == 'avatarStyleTop'){

            console.log($(this).val())

            // Modfier la valeur de l'attribut src de #avatarStyleTop
            $('#avatarTop').attr('src', 'img/top/' +  $(this).val() + '.png' );

        } else

            // Modfier la valeur de l'attribut src de #avatarStyleBottom
            $('#avatarBottom').attr('src', 'img/bottom/' +  $(this).val() + '.png' );
    });
            

    // Capter la soumission du formulaire
    $('form').submit(function(evt){

        // Bloquer le comportement du formulaire
        evt.preventDefault();

        // Definir une variable pour lavalidation finale du formulaire
        var formScore = 0;


        // Variables globales de formulaire
        var avatarName = $('#avatarName').val();
        var avatarAge = $('#avatarAge').val();

        var avatarStyleTop = $('#avatarStyleTop').val();
        var avatarStyleBottom = $('#avatarStyleBottom').val();

        // console.log('Nom : ' + avatarName + 'Age : ' + avatarAge + 'Woman :' + avatarWoman + 'Man : ' + avatarMan + 'Top :' + avatarStyleTop + 'Bottom  :' + avatarStyleBottom);

        // Verifier les champs du formulaire
            // avatarName minimum 5 caracteres
            if(avatarName.length < 5 ){
                console.log('Min. 5 caracteres');

                // Ajouter un message dans le label du dessus
                $('[for="avatarName"] b').text('Minimum 5 caracteres');

            } else{
                console.log('avatarName ok');
                formScore++;
            };

            // avatarAge entre 1 et 100
            if(avatarAge == 0 || avatarAge > 100 || avatarAge.length == 0){
                console.log('Age entre 1 et 100');

                $('[for="avatarAge"] b').text('Entre 1 et 100 ans');
            } else{
                console.log('Age ok');
                formScore++;
            };


            // avatarStyleTop obligatoire
            if(avatarStyleTop == 'null'){
                console.log('Vous devez choisir un avatarStyleTop');
                $('[for="avatarStyleTop"] b').text('Choix obligatoire');

            } else{
                console.log('avatarStyleTop ok')
                formScore++;
            };

            // avatarStyleTop obligatoire
            if(avatarStyleBottom == 'null'){
                console.log('Vous devez choisir un avatarStyleBottom');
                $('[for="avatarStyleBottom"] b').text('Choix obligatoire');

            } else{
                console.log('avatarStyleBottom ok')
                formScore++;
            };

            // avatarGender verifier la valeur
            if(avatarGender == undefined){

                console.log('Vous devez choisir un genre');
                $('.labelGender b').text('Choix obligatoire');

            } else{

                console.log('avatarGender ok');
                formScore++;

            };

             // Verifier la valeur de la variable formScore
                if(formScore == 5){

                    console.log('Le formulaire est valide !');
                };
            
                // Envoyer les donnees du formulaire et attendre la reponse du serveur en Ajax
                // Le serveur repond true

                // Ajouter une ligne dans le tableau html
                $('table').append('' +
                    '<tr>' +
                        '<td><b>' + avatarName  + '</b></td>' +
                        '<td>' + avatarAge + '</td>' +
                        '<td>' + avatarGender + '</td>' +
                        '<td>' + avatarStyleTop + ' ' + avatarStyleBottom + '</td>' +
                    '</tr>'
                );

                // Ajouter l'avatar dans le  tableau JS
                myTown.push({
                    name: avatarName,
                    gender: avatarGender,
                    age: parseInt(avatarAge),
                    top: avatarStyleTop,
                    bottom: avatarStyleBottom

                });

                // Vider les champs du formulaire
                $('form')[0].reset();

                // Revenir aux valeurs 'null' pour l'avatar
                $('#avatarBody').attr('src', 'img/null.png')
                $('#avatarTop').attr('src', 'img/top/null.png')
                $('#avatarBottom').attr('src', 'img/bottom/null.png')


                // Afficher les donnees du tableau JS dans la console
                console.log(myTown.length);

                // Afficher ;a tao;;e tota;e  de ;a vollle dans #totalSims et dans span b
                $('#totalSims').text(myTown.length);
               

                // definir les variables  globales pour les statistiques
                var totalGirls = 0;
                var totalBoys = 0;
                var totalAge = 0;

                // Faire une boucle sur myTown pour connaitre les statistiques
                for(var i = 0; i < myTown.length; i++){
                    console.log(myTown[i].gender);

                    // Condition pour le gender
                    if(myTown[i].gender == 'girl'){
                        totalGirls++;
                    } else{
                        totalBoys++;
                    };

                    // Additionner les ages
                    totalAge += myTown[i].age;
                   

                    $('#simsMan').html(totalBoys + '<b>/' + myTown.length + '</b>');
                    $('#simsWoman').html(totalGirls + '<b>/' + myTown.length + '</b>');

                    // Afficher l'age total dans la console
                    var ageAmountRounded = Math.round(totalAge / myTown.length);

                    $('#simsAgeAmount').html(ageAmountRounded + '<b>/ans</b>');


                };
            



    }); //Fin d'attente de la fonction de chargement du DOM



















});