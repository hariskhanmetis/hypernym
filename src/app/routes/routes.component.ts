import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
   constructor (private router: Router) {}
  
    navigateToDashboard () {
      this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
    }
  
    navigateToRoutes() {
      this.router.navigate(['/dashboard/fleetpoint/routes/']);
    }
}
