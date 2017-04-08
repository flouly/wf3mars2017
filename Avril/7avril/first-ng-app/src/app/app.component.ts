// Importer la class component
import { Component, OnInit } from '@angular/core';
// Importer la class Router
import {Router} from '@angular/router';

// Decorateur component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// exporter la class du composent
export class AppComponent implements OnInit{

  // initier le router dans le constructeur
  constructor(
    private router: Router
  ){}

  private burgerIsOpen = false;

// Creer une fonction a appeler au click seu fa.bars
openBurger(){

   if (this.burgerIsOpen == false){
    // Changer la valeur deburgeIsopen
    this.burgerIsOpen = true;
  } else{
    this.burgerIsOpen = false;
  };
};

// Creer une foction
  closeBurger(link){

    // fermer le burger
    this.burgerIsOpen = false;

  //  Naviguer vers la bonne vue
  this.router.navigate([link]);


  };

//  Attendre  le chargement du component
  ngOnInit(){
// 
    console.log('le composant est chrrge')

    // Creer une variable pour selectionner le loader en JS
    let loader = document.getElementById('appLoader');

    // Ajouter la class closedLoader a la balise
  loader.classList.add('closedLoader');
  }
}
