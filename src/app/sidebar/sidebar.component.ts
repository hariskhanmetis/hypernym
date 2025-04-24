import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  constructor(private router: Router) {}

  @ViewChild('modal') modal!: ElementRef;
  
  isModalOpen = false;
  modalVisible = false; 

  openModal() {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      setTimeout(() => {
        this.modalVisible = true;
      }, 1); 
    } else {
      this.modalVisible = false;
      setTimeout(() => {
        this.isModalOpen = false;
      }, 500); 
    }
  }

  closeModal() {
    this.modalVisible = false;
    setTimeout(() => {
      this.isModalOpen = false;
    }, 500);
  }

  ngAfterViewInit() {
    this.modalVisible = false;
  }

  navigateToFleetpoint () {
    this.router.navigate(['/dashboard/fleetpoint/dashboards']);
    this.closeModal();
  }
}
