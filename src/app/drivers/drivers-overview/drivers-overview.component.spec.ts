import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversOverviewComponent } from './drivers-overview.component';

describe('DriversOverviewComponent', () => {
  let component: DriversOverviewComponent;
  let fixture: ComponentFixture<DriversOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriversOverviewComponent]
    });
    fixture = TestBed.createComponent(DriversOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
