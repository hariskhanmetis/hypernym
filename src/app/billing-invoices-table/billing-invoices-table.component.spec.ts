import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInvoicesTableComponent } from './billing-invoices-table.component';

describe('BillingInvoicesTableComponent', () => {
  let component: BillingInvoicesTableComponent;
  let fixture: ComponentFixture<BillingInvoicesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BillingInvoicesTableComponent]
    });
    fixture = TestBed.createComponent(BillingInvoicesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
