// Ajouter une class a une balise
var myTitle = document.querySelector('h1');

// Ajouter une classse a la balise h1
myTitle.classList.add('error');

// Selectionner la derniere balise p
var myLastP = document.querySelector('p:last-of-type');

// Supprimer la class hidden
myLastP.classList.remove('hidden');


// Selectionner la balise  button
var myButton = document.querySelector('button');

// Selectionner la 1er balise h2
var myFirstH2 = document.querySelector('h2');


// Capter le clique sur le button
myButton.onclick = function(){

//    Ajouter  ou supprimer la class move sur la premiere balise h2

myFirstH2.classList.toggle('move');

};