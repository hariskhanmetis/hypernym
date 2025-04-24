import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('modal') modal!: ElementRef;

  isModalOpen = false;
  modalVisible = false;
  currentMenu: string | null = null; 
 
  openModal(menuName: string) {
    if (!this.isModalOpen) {
      this.isModalOpen = true;
      this.currentMenu = menuName; 
      setTimeout(() => {
        this.modalVisible = true; 
      }, 1);
    } else if (this.currentMenu === menuName) {
      this.modalVisible = false;
      setTimeout(() => {
        this.isModalOpen = false;
        this.currentMenu = null;
      }, 500);
    } else {
      this.modalVisible = false;
      setTimeout(() => {
        this.currentMenu = menuName; 
        this.modalVisible = true;
      }, 500);
    }
  }

  closeModal() {
    this.modalVisible = false;
    setTimeout(() => {
      this.isModalOpen = false;
      this.currentMenu = null; 
    }, 500);
  }

  ngAfterViewInit() {
    this.modalVisible = false;
  }
}