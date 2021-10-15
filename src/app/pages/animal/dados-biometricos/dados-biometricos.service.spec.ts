import { TestBed } from '@angular/core/testing';

import { DadosBiometricosService } from './dados-biometricos.service';

describe('DadosBiometricosService', () => {
  let service: DadosBiometricosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosBiometricosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
