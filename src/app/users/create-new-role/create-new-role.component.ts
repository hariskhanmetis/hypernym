import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-role',
  templateUrl: './create-new-role.component.html',
  styleUrls: ['./create-new-role.component.css']
})
export class CreateNewRoleComponent {
  constructor (private router: Router) {}

  navigateToUsers () {
    this.router.navigate(['/dashboard/users/']);
  }

  navigateToRoles () {
    this.router.navigate(['/dashboard/users/all']);
  }

  navigateToCreateNewRole () {
    this.router.navigate(['/dashboard/users/new-role']);
  }
}
