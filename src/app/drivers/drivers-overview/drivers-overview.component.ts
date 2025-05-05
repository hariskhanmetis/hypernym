import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-overview',
  templateUrl: './drivers-overview.component.html',
  styleUrls: ['./drivers-overview.component.css']
})
export class DriversOverviewComponent {
  constructor (private router: Router) {}

  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToDrivers() {
    this.router.navigate(['/dashboard/fleetpoint/drivers']);
  }

  navigateToManageShifts() {
    this.router.navigate(['/dashboard/fleetpoint/drivers/manage-shifts']);
  }
}
