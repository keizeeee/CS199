import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as L from 'leaflet'

@Component({
  selector: 'app-dashboard',
  imports: [MatSlideToggleModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void{
    this.configMap()
  }

  // must define map variable
  map : any

  configMap(){
    this.map = L.map('map',{
      center: [12.8797, 121.7740], // Philippines
      zoom: 6,
    }); // id is map in dashboard

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // set up map
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);


  }
  
}