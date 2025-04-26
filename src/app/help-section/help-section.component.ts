import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-section',
  templateUrl: './help-section.component.html',
  styleUrls: ['./help-section.component.css']
})
export class HelpSectionComponent {
  constructor (private router: Router) {}

  navigateToFaq() {
    this.router.navigate(['/dashboard/help/faq']);
  }
}
