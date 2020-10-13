import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsStudentComponent } from './jobs-student.component';

describe('JobsStudentComponent', () => {
  let component: JobsStudentComponent;
  let fixture: ComponentFixture<JobsStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
