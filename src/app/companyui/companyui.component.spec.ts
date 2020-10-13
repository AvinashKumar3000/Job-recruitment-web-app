import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyuiComponent } from './companyui.component';

describe('CompanyuiComponent', () => {
  let component: CompanyuiComponent;
  let fixture: ComponentFixture<CompanyuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
