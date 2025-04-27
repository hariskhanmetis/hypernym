import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsMaintainanceComponent } from './dashboards-maintainance.component';

describe('DashboardsMaintainanceComponent', () => {
  let component: DashboardsMaintainanceComponent;
  let fixture: ComponentFixture<DashboardsMaintainanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsMaintainanceComponent]
    });
    fixture = TestBed.createComponent(DashboardsMaintainanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
