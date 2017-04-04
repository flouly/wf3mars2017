/*
-Creer un tableau contenant 4 prenom dont  le votre
-Faire une boucle sur le tableau pour saluer dans la console chacun des prenoms
-Afficher un message pour votre prenom
*/


var firstName = ['Fred', 'Roger', 'Mika', 'Mike'];

for( var i = 0; i < firstName.length; i++){

    // console.log('Salut ' + firstName[i]);

    if (firstName[i] == 'Fred'){

        console.log('Hello it\'s me ' );

        // Pour modifier une balise html
        document.querySelector('p').textContent = 'Hello it\'s me ';
    } else{
        console.log('Salut ' + firstName[i]);
    }

};