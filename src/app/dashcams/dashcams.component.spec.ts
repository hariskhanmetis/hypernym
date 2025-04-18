import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashcamsComponent } from './dashcams.component';

describe('DashcamsComponent', () => {
  let component: DashcamsComponent;
  let fixture: ComponentFixture<DashcamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashcamsComponent]
    });
    fixture = TestBed.createComponent(DashcamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
