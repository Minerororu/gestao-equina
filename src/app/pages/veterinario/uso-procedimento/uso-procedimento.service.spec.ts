import { TestBed } from '@angular/core/testing';

import { UsoProcedimentoService } from './uso-procedimento.service';

describe('UsoProcedimentoService', () => {
  let service: UsoProcedimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsoProcedimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
