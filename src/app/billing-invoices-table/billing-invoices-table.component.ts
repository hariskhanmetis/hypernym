import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-invoices-table',
  templateUrl: './billing-invoices-table.component.html',
  styleUrls: ['./billing-invoices-table.component.css']
})
export class BillingInvoicesTableComponent {
  constructor(private router: Router) { }

  navigateToInvoice() {
    this.router.navigate(['/dashboard/billing/invoice']);
  }
}
