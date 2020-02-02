import { Place } from './../model/place.model';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class LocationService {
private locations:Array<Place>=[]
currentLocation:Place
  constructor(private storage:Storage) {
    this.locations.push({title:"A"});
    this.locations.push({title:"B"});
    this.locations.push({title:"C"});
   }

public getLocations(){
return this.storage.get('locations');
}
public addLocations(place:Place){
  this.locations.push(place);
  this.storage.set("locations",this.locations);
}

public updateLocations(locations){
  this.storage.set("locations",locations)
}
  addPhoto(base64Image: string, timestamp: number) {
        for (let i = 0; i < this.locations.length ; i++) {
            if(this.locations[i].timestamp===timestamp){
              this.locations[i].photo.push(base64Image);
              this.updateLocations(this.locations);
              break;
            }
        }
    }
}
