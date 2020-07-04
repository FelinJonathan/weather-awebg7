import {Injectable} from '@anglular/core';
import {HttpClient,HttpParams} from '@angular/common/http';

@Injectable({
providedIn: 'root'
})

export class WeatherService {
  url='https://api.openweathermap.org/data/2.5/weather';
  apikey='0fd6751f457ec240a9cf93d1319074f5';

  constructor(private http: HttpClient) { }

getWeatherDataByCoords(lat, lon){
  let params=new HttpParams()
  .set('lat', lat)
  .set('lng', lon)
  .set('units', 'imperial')
  .set('appid',this.apikey)

  return this.http.get(this.url, {params });
}
getWeatherDataByCityName(city: string){
  let params=new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apikey)

  return this.http.get(this.url, {params});
}
}
