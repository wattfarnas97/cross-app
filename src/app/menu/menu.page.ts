import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router,private authService:AuthentificationService) { }

  ngOnInit() {
  }

  public menus=[
    {title:"Home",url:"/menu/home",icon:"home"},
    {title:"Meteo",url:"/menu/meteo",icon:"rainy"},
    {title:"Locations",url:"/menu/locations",icon:"compass"},
    {title:"Gallery",url:"/menu/gallery",icon:"albums"},
    {title:"Logout",url:"logout",icon:"log-out"},



  ]

  onMenu(m) {
    if(m.url=="logout") {
  this.authService.logout();
  this.router.navigateByUrl("/login");
    }
    else{
      this.router.navigateByUrl(m.url);
    }

  }
}
