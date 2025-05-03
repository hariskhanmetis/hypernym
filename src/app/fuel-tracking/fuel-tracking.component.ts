import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fuel-tracking',
  templateUrl: './fuel-tracking.component.html',
  styleUrls: ['./fuel-tracking.component.css']
})
export class FuelTrackingComponent {
constructor (private router: Router) {}

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
  
    navigateToFuelTracking() {
      this.router.navigate(['/dashboard/fleetpoint/fuel-tracking/']);
    }
}
