import { Router } from '@angular/router';
import { Place } from './../model/place.model';
import { LocationService } from './../services/location.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public locations:Array<Place>=[]

  constructor(private locationService:LocationService,private router:Router,private alertCtrl:AlertController) { }

  ngOnInit() {
  
  }
  ionViewWillEnter(){
  this.onGetLocation()
  }
  onNewLocation(){
this.router.navigateByUrl("/menu/new-location")
  }
async onRemove(location){

  let alert =  await this.alertCtrl.create({
    header: 'Confirmation',
    message: 'Etes vous sure de vouloir supprimé?',
    buttons: [
      {
        text: 'Non',
        handler: () => {
        console.log("jjj")
        }
      },
      {
        text: 'Oui',
        handler: () => {
       this.removeLocation(location)

        }
      }
    ]
  });
  await alert.present();
 
}
onDetail(l){
  this.locationService.currentLocation=l
  this.router.navigateByUrl("/menu/location-details")
}
onGetLocation(){
  this.locationService.getLocations().then(data=>{
     this.locations=data!=null?data:[]
     return this.locations.slice();
   });
}
public removeLocation(l:Place){
  let index=this.locations.indexOf(l);
 this.locations.splice(index,1);
 this.locationService.updateLocations(this.locations);

}
}
