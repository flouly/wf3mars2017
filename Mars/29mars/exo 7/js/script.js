/*
Le Chifoumy 
- l'utilisateur doit choisir entre pierre, feuille et ciseaux
- l'ordinateur doit choisir entre pierre, feuille et ciseaux
- nous comparons le choix de l'ordinateur  et de l'utilisateur
- Afficher le resultat dans la console:
- une partie se joue en 3 manches


*/

// Variable globale pour le choix de l'utilisateur

var _userBet = ''; //_ pour var globale 
var userWin = 0;
var computerWin = 0;

/*- l'utilisateur doit choisir entre pierre, feuille et ciseaux
-Creer une fonction qui prend en parametre le choix de l'utilisateur-
*/

function userChoice(paramChoice){


// Assigner a la  variable userBet la valeur de paramChoice

_userBet = paramChoice;

};

/*l'ordinateur doit choisir entre pierre, feuille et ciseaux
-Faire une fonction pour declencher le choix au clique sur bouton
-Creer un tableau contenant pierre , feuille et ciseaux
-Faire en sorte de choisir aleatoirement l'un des 3 index du tableau
-Afficher le resultat dans la  console
*/

function computerChoice(){

    // afficher dans la console la valeur de userbet

    console.log('user : ' + _userBet);

    var computerMemory = ['pierre', 'feuille','ciseaux'];
    
    // Choisir aléatoirement l'un de 3 index du tableau
    var computerBet = computerMemory[Math.floor(Math.random()* computerMemory.length)];
    console.log('Computer : ' + computerBet);





// Verifier si userBet est vide

if(_userBet == ''){
    document.querySelector('h2').innerHTML = 'Choisi ton <i>arme</i>';
}else{

        // Afficher les 2 choix dans la valise H2
        document.querySelector('h2').textContent = _userBet + '  Vs. ' + computerBet;

            /*
        Comparaison des variables
        */
        if( _userBet == computerBet){
        

            document.querySelector('p').textContent = 'Egalite';

            
        }else if ( _userBet == 'pierre' && computerBet == 'ciseaux'){
            
              document.querySelector('p').textContent = 'Gagne';

            //   Incrementer la variable userWin
             userWin++;

        }else if ( _userBet == 'feuille' && computerBet == 'pierre'){
            

            document.querySelector('p').textContent = 'Gagne';

             //   Incrementer la variable userWin
             userWin++;

        }else if ( _userBet == 'ciseaux' && computerBet == 'feuille'){
            

            document.querySelector('p').textContent = 'Gagne';

             //   Incrementer la variable userWin
             userWin++;

        }else{
            

            document.querySelector('p').textContent = 'Perdu';

            //   Incrementer la variable computerWin
            computerWin++;
        };

};

// Verifier les valeurs de userWin et computerWin
if(userWin == 3){
    console.log('La partie est gagne');
    // Afficher le  message dans le body
    document.querySelector('body').innerHTML = '<h1>vous avez gagne!</h1><a href="index.html">Rejouer</a>';

};

if(computerWin == 3){

    console.log('La partie est perdu....')
    document.querySelector('body').innerHTML = '<h1>vous avez perdu!</h1><a href="index.html">Rejouer</a>';
};


};




