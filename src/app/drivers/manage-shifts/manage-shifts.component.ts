import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-shifts',
  templateUrl: './manage-shifts.component.html',
  styleUrls: ['./manage-shifts.component.css']
})
export class ManageShiftsComponent implements AfterViewInit {
  constructor(private router: Router) { }
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

  navigateToDashboard() {
    this.router.navigate(['/dashboard/fleetpoint/dashboards/']);
  }

  navigateToManageShifts() {
    this.router.navigate(['/dashboard/fleetpoint/drivers/manage-shifts']);
  }
}
