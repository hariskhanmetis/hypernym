import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-overview',
  templateUrl: './routes-overview.component.html',
  styleUrls: ['./routes-overview.component.css']
})
export class RoutesOverviewComponent {
  constructor (private router: Router) {}
  
  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToRoutes() {
    this.router.navigate(['/dashboard/fleetpoint/routes/']);
  }

  navigateToRouteDetails() {
    this.router.navigate(['/dashboard/fleetpoint/routes/route-details/']);
  }
}
