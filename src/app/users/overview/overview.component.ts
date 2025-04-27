import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  constructor (private router: Router) {}

  navigateToBrowseAll () {
    this.router.navigate(['/dashboard/users/all']);
  }

  navigateToCreateNewRole () {
    this.router.navigate(['/dashboard/users/new-role']);
  }
}
