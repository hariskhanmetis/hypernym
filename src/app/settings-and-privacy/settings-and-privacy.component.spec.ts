import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAndPrivacyComponent } from './settings-and-privacy.component';

describe('SettingsAndPrivacyComponent', () => {
  let component: SettingsAndPrivacyComponent;
  let fixture: ComponentFixture<SettingsAndPrivacyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsAndPrivacyComponent]
    });
    fixture = TestBed.createComponent(SettingsAndPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
