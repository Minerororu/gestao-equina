import { TestBed } from '@angular/core/testing';

import { LancamentoFinanceiroService } from './lancamento-financeiro.service';

describe('LancamentoFinanceiroService', () => {
  let service: LancamentoFinanceiroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LancamentoFinanceiroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
