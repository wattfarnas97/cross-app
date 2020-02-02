import { Router } from '@angular/router';
import { LocationService } from './../services/location.service';
import { Place } from './../model/place.model';
import { Component, OnInit } from '@angular/core';
import{NavController} from '@ionic/angular';
import{Geolocation} from '@ionic-native/geolocation/ngx';
@Component({
  selector: 'app-new-locations',
  templateUrl: './new-locations.page.html',
  styleUrls: ['./new-locations.page.scss'],
})
export class NewLocationsPage implements OnInit {

  constructor(private geolocation:Geolocation,private locationService:LocationService,private router:Router) { }

  ngOnInit() {
  }
  onAddLocation(form:Place){
    form.timestamp=new Date().getTime();
    form.photo=[];
    this.geolocation.getCurrentPosition().then((resp)=>{
      form.coordinates={
        longitude:resp.coords.longitude,
        latitude :resp.coords.latitude,
      }
      this.locationService.addLocations(form)    
    this.router.navigateByUrl("/menu/locations")
       }
      )
  

  }

}
