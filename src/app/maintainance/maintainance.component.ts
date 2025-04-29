import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintainance',
  templateUrl: './maintainance.component.html',
  styleUrls: ['./maintainance.component.css']
})
export class MaintainanceComponent {
   constructor(private router: Router) { }
  
    navigateToDashboard() {
      this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
    }
  
    navigateToMaintainance() {
      this.router.navigate(['/dashboard/fleetpoint/maintainance/']);
    }
}
