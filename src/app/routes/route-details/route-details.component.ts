import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {
  constructor(private router: Router) {}

  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToRoutes() {
    this.router.navigate(['/dashboard/fleetpoint/routes/']);
  }

  navigateToRouteDetails() {
    this.router.navigate(['/dashboard/fleetpoint/routes/route-details/']);
  }

  zoom = 14; 
    center: google.maps.LatLngLiteral = { lat: 33.6790, lng: 73.0250 }; 
  
    apiLoaded = false;
  
    mapOptions: google.maps.MapOptions = {
      mapTypeId: 'roadmap',       
      disableDefaultUI: true,  
      mapTypeControl: false,       
      streetViewControl: false, 
      rotateControl: false,  
      scaleControl: false,   
      fullscreenControl: false, 
      zoomControl: false, 
  
      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            { lightness: -5 }, 
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
