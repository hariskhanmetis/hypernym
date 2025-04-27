import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  constructor (private router: Router) {}

  navigateToCreateNewRole () {
    this.router.navigate(['/dashboard/users/new-role']);
  }
}
