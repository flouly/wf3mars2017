var user = 'Julien Noyer';

// Creer une variable de type array
var myArray = ['Du texte', 1970, true, user];


console.log(myArray);

// Afficher la taille du tableau (nombre d'index)
console.log('la taille du tableau est : ' + myArray.length);

// Afficher un des index de mon tableau
console.log(myArray[0]);
console.log(myArray[2]);

// Ajouter un l'index dans le tableau
myArray.push('Une valeur en plus');
console.log(myArray);

// Supprimmer et remplacer des index du tableau

myArray.splice(2, 1, false);
console.log(myArray);