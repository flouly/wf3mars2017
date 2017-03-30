// Attendre le chargement du DOM

$(document).ready( function(){


    // Code a executer sur la page une fois charge

  /*
  Le deathSelector
  */

  var deathSelector = $('h3').prev().parent().next().parent().find('Main').children('article').find('h3');
  console.log('balise selectionnee : ', deathSelector);

/*
Les selecteur jquery classiques
*/


    // Selectionner une/des balise par son nom
    var myHtmlTag = $('header');
    console.log(myHtmlTag);

    // Selectionner une/des balise par sa class
    var myClass = $('.myClass');
    console.log(myClass);
    
    // Selectionner une/des balise par son id
    var myId = $('#myId');
    console.log(myId)

    // Selecteur imbrique
    var myItalic = $('h2 i');
    console.log(myItalic);

    // Selecteur CSS3
    var myFooter=$('body > main + footer');
    console.log(myFooter);

    /* Les selecteur jQuery specifiques
    */

    // Selecteur d'enfants
    var myChildren = $('header').children('button');
    console.log(myChildren);

    // Selecteur de parents
    var myParent = $('h2').parent();
    console.log(myParent);

    // Rechercher une balise
    var myH2 = $('main').find('h2');
    console.log(myH2);


    // Selectionner le premier
    var firstBtn = $('button:first');
    console.log(firstBtn);

    // Selectionner la nth balise
    var secondLi = $('li').eq(1);
    console.log(secondLi);

    // Selectionner  la balise suivante
    var afterMain = $('main').next();
    console.log(afterMain);

    // Seledtionner la balise precedente
    var beforeMain = $('Main').prev();
    console.log(beforeMain);



}); //Fin de la fonction d'attente de chargement de DOM