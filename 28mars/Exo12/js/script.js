// Creerr une variable de type objet

var user = {

    firstName: 'Julien',
    lastName: 'Noyer',

    // Ajouter une fonction pour afficher le nom complet
    fullName: function(){
        console.log(this.firstName + ' ' + this.lastName);
    }
};

// Afficher l'objet
console.log(user);

// Afficher une propriete de l'objet
console.log(user.firstName);

// Modifier la valeur d'une propriete de l'objet
user.lastName = 'Marley';
console.log(user);

// Appeler la fonction de l'objet
user.fullName();