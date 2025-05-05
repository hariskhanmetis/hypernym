import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-shifts',
  templateUrl: './manage-shifts.component.html',
  styleUrls: ['./manage-shifts.component.css']
})
export class ManageShiftsComponent {
  constructor(private router: Router) {}

  navigateToDashboard () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToManageShifts() {
    this.router.navigate(['/dashboard/fleetpoint/drivers/manage-shifts']);
  }
}
