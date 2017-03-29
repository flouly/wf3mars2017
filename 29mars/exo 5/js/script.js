
var userChoice = '';
console.log(userChoice);


/*
Creer une fonction qui permet a l'utilisateur de choisir une couleur
*/

function chooseColor(){
    // Code a executer lorsque la fonction est appelee
    var  userPrompt =  prompt ('Choisir une couleur entre rouge blue et vert')

    // assigner la valeur de userPrompt a userChoice

    userChoice = userPrompt; //On peut passer directement a userPrompt
    

    // Appeler la fonction de traduction
    translateColor( userChoice );

};

// Creer une fonction pour traduire les couleurs
function translateColor(paramColor){
    console.log('Je suis la fonction de traduction: '+ paramColor);

    if (paramColor == 'rouge'){

    console.log( 'Rouge se dit Red en anglais');

    } else if (paramColor == 'bleu'){
        console.log('Bleu se dit Blue en anglais');


    }else if (paramColor == 'vert'){
        console.log( 'Vert se dit Green en anglais');

    } else {

        console.log('Je ne connais pas cette  couleur....');
        ///Rappeler la fonction pour refaire choisir une couleur
        chooseColor();

    };
};



