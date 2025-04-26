import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-topics',
  templateUrl: './help-topics.component.html',
  styleUrls: ['./help-topics.component.css']
})
export class HelpTopicsComponent {
  constructor (private router: Router) {}

  navigateToFaq() {
    this.router.navigate(['/dashboard/help/faq']);
  }
}
