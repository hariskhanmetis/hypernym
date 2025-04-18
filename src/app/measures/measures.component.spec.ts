import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuresComponent } from './measures.component';

describe('MeasuresComponent', () => {
  let component: MeasuresComponent;
  let fixture: ComponentFixture<MeasuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeasuresComponent]
    });
    fixture = TestBed.createComponent(MeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
