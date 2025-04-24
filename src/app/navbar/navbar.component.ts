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
      this.isModalOpen = false;
      this.modalVisible = false;
    }
  
    ngAfterViewInit() {
      this.modalVisible = false;
    }

}
