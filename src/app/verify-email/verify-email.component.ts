import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {
  constructor(private router: Router) { }

  navigateToResetPassword() {
    this.router.navigate(['auth/reset-password']);
  }
}
