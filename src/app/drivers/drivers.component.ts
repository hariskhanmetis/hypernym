import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent {
  constructor (private router: Router) {}

  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToDrivers() {
    this.router.navigate(['/dashboard/fleetpoint/drivers']);
  }
}
