// Selectionner la balise h1
var myTitle = document.querySelector('h1');

// Afficher le contenu de la balise dans la console
console.log(myTitle.textContent);

// Modifier le contenu de la balise
myTitle.textContent = 'Le titre a changer'

// Selectionner la balise #myId
var myId = document.querySelector('#myId');

// Afficher ;e contenu 
console.log(myId.innerHTML);

// Modifier le contenu HTML de la balise 
myId.innerHTML = 'Contacter <i>moi</i> les gars';

