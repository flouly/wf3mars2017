/* Creer un tableau contenant 5  index
- 1 string
- 1 number
- 2 booleans differents
    Afficher le tableau dans la console
*/

var myArray = ['Du texte', 1979, true, false];
console.log(myArray);


/* Ajouter un string dans le tableau
    Afficher le tableau dans la console */


myArray.push('Hello World');


// Afficher dans la console la taille du tableau
// Afficher le premier et le dernier index du tableau dans la console

console.log(myArray.length);
console.log(myArray[0], myArray[4]);

/* 
Creer un objet contenant 3 proprietes
    -le tableau
    - 1 premon
    - 1 age
Affichet l objet dans la console
*/

var myObject = {
    Array: myArray,
    firstName: 'Fred',
    age: '45'

};

console.log(myObject);

/*
Afficher toutes les proprietes de l'objet dans la console 
*/

console.log(myObject.Array);
console.log(myObject.firstName);
console.log(myObject.age);

/*
    Modifier la propriete age de l'objet
    Afficher l'objet dans la console

*/

myObject.age = 26;
console.log(myObject);


