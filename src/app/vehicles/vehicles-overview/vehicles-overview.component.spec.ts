import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesOverviewComponent } from './vehicles-overview.component';

describe('VehiclesOverviewComponent', () => {
  let component: VehiclesOverviewComponent;
  let fixture: ComponentFixture<VehiclesOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehiclesOverviewComponent]
    });
    fixture = TestBed.createComponent(VehiclesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
