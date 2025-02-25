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
    this.loadGeoJSON("assets/AggregateBandwidth.geojson");
  }

  // must define map variable
  private map!: L.Map;

  private geoJsonLayer!: L.GeoJSON; // Store the GeoJSON layer

  // LOAD THE MAP
  configMap(){
    this.map = L.map('map',{
      center: [12.8797, 121.7740], // Philippines
      zoom: 6,
    }); // id is map in dashboard

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // set up map
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);


  }

  private loadGeoJSON(filePath: string): void {
    fetch(filePath)
      .then(response => response.json())
      .then(data => {
        this.geoJsonLayer = L.geoJSON(data, {
          style: { color: "red", weight: 2 }, // Customize layer style
          onEachFeature: (feature, layer) => {
            if (feature.properties) {
              layer.bindPopup(`<b>Road</b><br>${JSON.stringify(feature.properties)}`);
            }
          }
        });

        this.geoJsonLayer.addTo(this.map);
      })
      .catch(error => console.error("Error loading GeoJSON:", error));
  }
  
}