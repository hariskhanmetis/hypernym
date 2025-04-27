import { Component, ViewChild, OnInit } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  zoom = 17; 
  center: google.maps.LatLngLiteral = { lat: 33.6790, lng: 73.0250 }; 

  apiLoaded = false;

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',        
    mapTypeControl: false,       
    streetViewControl: false,  
    fullscreenControl: false,   
    zoomControl: true,  

    styles: [
      {
        featureType: "all",
        elementType: "all",
        stylers: [
          { lightness: -5 }, // Makes the entire map slightly lighter
        ]
      }
    ]
  };

  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  ngOnInit() {
    this.loadGoogleMapsScript();
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  private loadGoogleMapsScript() {
    if (!(window as any).google?.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}`;
      script.async = true; 
      script.defer = true;
      script.onload = () => this.apiLoaded = true;
      document.head.appendChild(script);
    } else {
      this.apiLoaded = true;
    }
  }
}
