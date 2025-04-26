import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpQuestionsComponent } from './help-questions.component';

describe('HelpQuestionsComponent', () => {
  let component: HelpQuestionsComponent;
  let fixture: ComponentFixture<HelpQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpQuestionsComponent]
    });
    fixture = TestBed.createComponent(HelpQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
