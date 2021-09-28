import { Component, OnInit } from '@angular/core';
import { WeatherForecast, WeatherForecastService } from 'openapi/weatherforecast-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'openApi';
  weatherDetails: WeatherForecast[]=[];
  constructor(private readonly weatherForecast: WeatherForecastService){}
  ngOnInit(){
    this.weatherForecast.apiWeatherforecastGet().subscribe(res=>{
      this.weatherDetails = res;
    })
  }
}
