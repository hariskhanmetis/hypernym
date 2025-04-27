import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsDriversComponent } from './dashboards-drivers.component';

describe('DashboardsDriversComponent', () => {
  let component: DashboardsDriversComponent;
  let fixture: ComponentFixture<DashboardsDriversComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsDriversComponent]
    });
    fixture = TestBed.createComponent(DashboardsDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
