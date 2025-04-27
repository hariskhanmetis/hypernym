import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsRealtimeTrackingComponent } from './dashboards-realtime-tracking.component';

describe('DashboardsRealtimeTrackingComponent', () => {
  let component: DashboardsRealtimeTrackingComponent;
  let fixture: ComponentFixture<DashboardsRealtimeTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsRealtimeTrackingComponent]
    });
    fixture = TestBed.createComponent(DashboardsRealtimeTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
