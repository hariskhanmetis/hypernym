import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerQuestionsHeaderComponent } from './answer-questions-header.component';

describe('AnswerQuestionsHeaderComponent', () => {
  let component: AnswerQuestionsHeaderComponent;
  let fixture: ComponentFixture<AnswerQuestionsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnswerQuestionsHeaderComponent]
    });
    fixture = TestBed.createComponent(AnswerQuestionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
