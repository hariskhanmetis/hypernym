import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardsJobsComponent } from './dashboards-jobs.component';

describe('DashboardsJobsComponent', () => {
  let component: DashboardsJobsComponent;
  let fixture: ComponentFixture<DashboardsJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardsJobsComponent]
    });
    fixture = TestBed.createComponent(DashboardsJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
