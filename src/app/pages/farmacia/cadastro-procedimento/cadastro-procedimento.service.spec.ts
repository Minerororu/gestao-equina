import { TestBed } from '@angular/core/testing';

import { CadastroProcedimentoService } from './cadastro-procedimento.service';

describe('CadastroProcedimentoService', () => {
  let service: CadastroProcedimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroProcedimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
