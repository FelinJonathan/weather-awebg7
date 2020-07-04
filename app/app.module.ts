import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WeatherservicesService } from './weatherservices.service';
import { TodaycomponentComponent } from './today/todaycomponent/todaycomponent.component';
import { TodayComponent } from './today/today/today.component';
import { WeatherService } from './weather.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TodaycomponentComponent, TodayComponent ],
  bootstrap:    [ AppComponent ],
  providers: [WeatherservicesService, WeatherService]
})
export class AppModule { }
