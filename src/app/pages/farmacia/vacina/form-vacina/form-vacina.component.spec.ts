import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVacinaComponent } from './form-vacina.component';

describe('FormVacinaComponent', () => {
  let component: FormVacinaComponent;
  let fixture: ComponentFixture<FormVacinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormVacinaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVacinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
