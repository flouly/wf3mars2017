var myNumber = 45;

// Egalite simple: verifie la valeur

console.log(myNumber == 45); // true
console.log(myNumber == '45'); // true

// Inegalite simple
console.log(myNumber != 45);
console.log(myNumber != '45');

console.log(myNumber != 12);

// Egalite strict: verifie la valeur ET  le type de la variable
console.log(myNumber === 45);
console.log(myNumber === '45');


// Inegalite STRICT :
console.log(myNumber !== 45);
console.log(myNumber !== '45');

// Superieur/inferieur
console.log(myNumber > 46);
console.log(myNumber < 46);

// Superieur ou egal/Inferieur ou egal
console.log(myNumber >= 12);
console.log(myNumber <= 20);