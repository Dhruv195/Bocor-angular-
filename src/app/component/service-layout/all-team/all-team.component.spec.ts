import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTeamComponent } from './all-team.component';

describe('AllTeamComponent', () => {
  let component: AllTeamComponent;
  let fixture: ComponentFixture<AllTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTeamComponent]
    });
    fixture = TestBed.createComponent(AllTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
