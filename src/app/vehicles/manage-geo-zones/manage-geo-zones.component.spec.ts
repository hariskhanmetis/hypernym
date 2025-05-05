import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGeoZonesComponent } from './manage-geo-zones.component';

describe('ManageGeoZonesComponent', () => {
  let component: ManageGeoZonesComponent;
  let fixture: ComponentFixture<ManageGeoZonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageGeoZonesComponent]
    });
    fixture = TestBed.createComponent(ManageGeoZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
