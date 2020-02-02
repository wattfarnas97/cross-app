import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private httpClient:HttpClient) { }

  public getMeteoData(city:string)
  {
    return  this.httpClient.get("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=64a01ee168dc5a7d4d195a3db0389faf");
  }
}
