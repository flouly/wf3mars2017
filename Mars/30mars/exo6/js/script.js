
// Selectionner la balise dans laquelle ajouter une autre balise 
var myMain = document.querySelector('main');





// Creer un tableau ccontenant 4 titres
var myArray = ['Accueil', 'About', 'Portfolio','Contacts'];


// Faire boucle sur le tableau
for(var i=0; i < myArray.length; i++){

    // Créer une variable pour générer une balise HTML

    var myNewTag = document.createElement('h2');


    // Ajouter du contenu dans la balise générée
    myNewTag.innerHTML = myArray[i];

    // Ajouter un enfant
    myMain.appendChild( myNewTag );

};










