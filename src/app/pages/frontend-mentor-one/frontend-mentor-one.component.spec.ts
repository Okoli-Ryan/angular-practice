import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendMentorOneComponent } from './frontend-mentor-one.component';

describe('FrontendMentorOneComponent', () => {
  let component: FrontendMentorOneComponent;
  let fixture: ComponentFixture<FrontendMentorOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendMentorOneComponent]
    });
    fixture = TestBed.createComponent(FrontendMentorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
