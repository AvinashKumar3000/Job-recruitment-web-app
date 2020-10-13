import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyYourInfoComponent } from './company-your-info.component';

describe('CompanyYourInfoComponent', () => {
  let component: CompanyYourInfoComponent;
  let fixture: ComponentFixture<CompanyYourInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyYourInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyYourInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
