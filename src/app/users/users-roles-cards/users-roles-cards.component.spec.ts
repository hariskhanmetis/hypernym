import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRolesCardsComponent } from './users-roles-cards.component';

describe('UsersRolesCardsComponent', () => {
  let component: UsersRolesCardsComponent;
  let fixture: ComponentFixture<UsersRolesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersRolesCardsComponent]
    });
    fixture = TestBed.createComponent(UsersRolesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
