import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShiftsComponent } from './manage-shifts.component';

describe('ManageShiftsComponent', () => {
  let component: ManageShiftsComponent;
  let fixture: ComponentFixture<ManageShiftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageShiftsComponent]
    });
    fixture = TestBed.createComponent(ManageShiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
