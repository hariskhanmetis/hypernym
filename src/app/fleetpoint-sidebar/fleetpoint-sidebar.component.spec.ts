import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetpointSidebarComponent } from './fleetpoint-sidebar.component';

describe('FleetpointSidebarComponent', () => {
  let component: FleetpointSidebarComponent;
  let fixture: ComponentFixture<FleetpointSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FleetpointSidebarComponent]
    });
    fixture = TestBed.createComponent(FleetpointSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
