import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat;
  lon;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition{(succes)=>{
        this.lat=succes.coords.latitude;
        this.long=succes.coords.longitude;

        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather=data;
        })
      }}
    }
  }

  getCity(city){
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>(
      this.weather=data;
    ))
  }

}

