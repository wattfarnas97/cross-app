import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public contact={
  name:"EMSI",
  email:"wattfarouk@gmail.com",
  logo:"assets/images/logo.png",
  localisation:"assets/images/localisation.jpg",
  telephone: "0622033334"
}
  constructor() {
         console.log("FFF")
  
  }

}
