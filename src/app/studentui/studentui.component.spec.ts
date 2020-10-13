import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentuiComponent } from './studentui.component';

describe('StudentuiComponent', () => {
  let component: StudentuiComponent;
  let fixture: ComponentFixture<StudentuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
