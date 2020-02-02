import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authenticationService:AuthentificationService,private router:Router,private toastController:ToastController) { }

  ngOnInit() {
  }
    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Login ou password incorrect',
            duration: 2000
        });
        toast.present();
    }

    onLogin(User) {

       let res= this.authenticationService.Login(User.login,User.password);
       if(res==true){
         this.router.navigateByUrl("/menu/home");
       }
       else {
           this.presentToast();
       }


    }
}
