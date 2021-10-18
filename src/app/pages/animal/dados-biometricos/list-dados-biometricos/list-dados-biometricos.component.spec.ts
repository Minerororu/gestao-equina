import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDadosBiometricosComponent } from './list-dados-biometricos.component';

describe('ListDadosBiometricosComponent', () => {
  let component: ListDadosBiometricosComponent;
  let fixture: ComponentFixture<ListDadosBiometricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDadosBiometricosComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDadosBiometricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
