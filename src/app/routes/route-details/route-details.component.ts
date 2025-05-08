import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { GoogleMapsService } from 'src/app/services/googlemaps/googlemap.service';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css'],
})
export class RouteDetailsComponent implements OnInit {
  zoom = 14;
  center: google.maps.LatLngLiteral = { lat: 33.6790, lng: 73.0250 };
  apiLoaded = false;
  mapOptions!: google.maps.MapOptions;

  @ViewChild(MapInfoWindow, { static: false }) infoWindow!: MapInfoWindow;

  constructor(private router: Router, private googleMapsService: GoogleMapsService) {}

  ngOnInit() {
    this.apiLoaded = this.googleMapsService.apiLoaded;
    this.mapOptions = this.googleMapsService.getDefaultMapOptions();
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToRoutes() {
    this.router.navigate(['/dashboard/fleetpoint/routes/']);
  }

  navigateToRouteDetails() {
    this.router.navigate(['/dashboard/fleetpoint/routes/route-details/']);
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
}