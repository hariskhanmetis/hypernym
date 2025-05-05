import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles-overview',
  templateUrl: './vehicles-overview.component.html',
  styleUrls: ['./vehicles-overview.component.css']
})
export class VehiclesOverviewComponent {
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
