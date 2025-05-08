import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-locations',
  templateUrl: './manage-locations.component.html',
  styleUrls: ['./manage-locations.component.css']
})
export class ManageLocationsComponent implements AfterViewInit {
  constructor(private router: Router) {}

  @ViewChild('modal') modal!: ElementRef;
  
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  ngAfterViewInit() {
    this.isModalOpen = false;
  }

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
