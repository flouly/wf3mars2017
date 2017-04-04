/*
Creer une application pour calculer une moyenne
-L'utilisateur a la possibilite d'ajouter autant de notes qu'il le souhaite
-Lorsqu'il le souhaite, il peut calculer la moyenne des notes
*/


// Variables globales
var notesArray = [];
var notesAmount = 0;

// Fonction
function addNotes(){
    // Demander a l'utilisateur d'ajouter une notes
    var newNote = prompt('Ajouter une note de 0 a 20');

    // Convertir newNote en variable de type NUMBER(le + est un raccourci du parseInt)

    // Ajouter la note dans le tableau
    notesArray.push(+newNote);
    console.log(notesArray);

    // Additionner notesAmount et newNote
    notesAmount += +newNote;
    console.log(notesAmount); 
};

function average(){


    var averageNote = notesAmount / notesArray.length;

    // Arrondir li resultat
    var roundAverage = Math.round(averageNote);

    console.log('la moyenne est de  '+ roundAverage  + '/20')

};