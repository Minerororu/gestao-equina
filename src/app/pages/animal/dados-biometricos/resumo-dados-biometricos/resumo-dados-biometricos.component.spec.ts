import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoDadosBiometricosComponent } from './resumo-dados-biometricos.component';

describe('ResumoDadosBiometricosComponent', () => {
  let component: ResumoDadosBiometricosComponent;
  let fixture: ComponentFixture<ResumoDadosBiometricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumoDadosBiometricosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoDadosBiometricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
