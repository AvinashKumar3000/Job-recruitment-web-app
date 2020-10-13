import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTestQuestionsComponent } from './create-test-questions.component';

describe('CreateTestQuestionsComponent', () => {
  let component: CreateTestQuestionsComponent;
  let fixture: ComponentFixture<CreateTestQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTestQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTestQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
