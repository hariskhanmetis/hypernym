import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-geo-zones',
  templateUrl: './manage-geo-zones.component.html',
  styleUrls: ['./manage-geo-zones.component.css']
})
export class ManageGeoZonesComponent {
constructor (private router: Router) {}
  
  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToVehicles() {
    this.router.navigate(['/dashboard/fleetpoint/vehicles/']);
  }

  navigateToGeoZones() {
    this.router.navigate(['/dashboard/fleetpoint/vehicles/manage-geo-zones/']);
  }
}
