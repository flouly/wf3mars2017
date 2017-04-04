/*

Programme pour saluer un utilisateur et afficher son annee de naissance :
    -Demander le prenom et le mon de l'utilisateur;
    -Saluer en disant : Bonjour prenom et prenon;
    -Demander l'age de l'utilisateur;
    -Demander l'age de naissance;
    -Afficher l'age de naissance;
*/


// -Demander le prenom et le mon de l'utilisateur

var firstName = prompt('Quel est ton prenom ?');
var lastName= prompt('Quel est ton nom');

// Saluer em disant : Bonjour prenom

console.log('Bonjour ' + firstName + ' ' + lastName);

// Demander l'age de l'utilisateur
var age = prompt('Quel est ton age ?');
 console.log(age);

// Transformer une variable STRING en type NUMBER
var ageNumber = parseInt(age);
console.log(ageNumber);

//  Demander l'age de naissance;
var currentYear = 2017;
console.log('Ton annee de naissance est ' + (currentYear - age));


