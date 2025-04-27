import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsVehiclesComponent } from './dashboards-vehicles.component';

describe('DashboardsVehiclesComponent', () => {
  let component: DashboardsVehiclesComponent;
  let fixture: ComponentFixture<DashboardsVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsVehiclesComponent]
    });
    fixture = TestBed.createComponent(DashboardsVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
