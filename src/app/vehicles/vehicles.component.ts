import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent {
  constructor (private router: Router) {}
  
    navigateToDashboard () {
      this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
    }
  
    navigateToVehicles() {
      this.router.navigate(['/dashboard/fleetpoint/vehicles/']);
    }
}
