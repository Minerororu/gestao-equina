import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDadosBiometricosComponent } from './form-dados-biometricos.component';

describe('FormDadosBiometricosComponent', () => {
  let component: FormDadosBiometricosComponent;
  let fixture: ComponentFixture<FormDadosBiometricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDadosBiometricosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDadosBiometricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
