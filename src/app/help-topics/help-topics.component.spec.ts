import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpTopicsComponent } from './help-topics.component';

describe('HelpTopicsComponent', () => {
  let component: HelpTopicsComponent;
  let fixture: ComponentFixture<HelpTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpTopicsComponent]
    });
    fixture = TestBed.createComponent(HelpTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
