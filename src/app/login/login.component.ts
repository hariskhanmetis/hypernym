import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { 
    console.log(this.router.url);
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
