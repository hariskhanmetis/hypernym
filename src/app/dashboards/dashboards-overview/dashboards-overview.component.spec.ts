import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsOverviewComponent } from './dashboards-overview.component';

describe('DashboardsOverviewComponent', () => {
  let component: DashboardsOverviewComponent;
  let fixture: ComponentFixture<DashboardsOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsOverviewComponent]
    });
    fixture = TestBed.createComponent(DashboardsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
