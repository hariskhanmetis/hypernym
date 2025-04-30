import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list-table',
  templateUrl: './users-list-table.component.html',
  styleUrls: ['./users-list-table.component.css']
})
export class UsersListTableComponent implements AfterViewInit {
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

  navigateToUsers () {
    this.router.navigate(['/dashboard/users/']);
  }
}
