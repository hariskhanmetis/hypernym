import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-locations',
  templateUrl: './manage-locations.component.html',
  styleUrls: ['./manage-locations.component.css']
})
export class ManageLocationsComponent {
  constructor(private router: Router) {}

  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToRoutes() {
    this.router.navigate(['/dashboard/fleetpoint/routes/']);
  }

  navigateToManageLocations() {
    this.router.navigate(['/dashboard/fleetpoint/routes/manage-locations/']);
  }
}
