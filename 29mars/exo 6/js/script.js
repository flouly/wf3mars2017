
var userChoice = '';
console.log(userChoice);


/*
Creer une fonction qui permet a l'utilisateur de choisir une couleur
*/

function chooseColor(){
    // Code a executer lorsque la fonction est appelee
    var  userPrompt =  prompt ('Choisir une couleur entre rouge, bleu et vert')

    // assigner la valeur de userPrompt a userChoice

    userChoice = userPrompt; //On peut passer directement a userPrompt
    

    // Appeler la fonction de traduction
    translateColor( userChoice );

};

// Creer une fonction pour traduire les couleurs
function translateColor(paramColor){
    console.log('Je suis la fonction de traduction: '+ paramColor);

    // Utilisation de switch

   switch(paramColor){

        //    1er cas: paramColor est egal a 'rouge'
        case 'rouge': console.log('Rouge = Red'); break;

        case 'vert' : console.log('Vert = Green'); break;

        case 'bleu' : console.log('Bleu = Blue'); break;
    
        default : console.log('Je ne connais pas cette couleur')

   }
};



