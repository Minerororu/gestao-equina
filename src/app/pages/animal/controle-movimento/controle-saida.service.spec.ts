import { TestBed } from '@angular/core/testing';

import { ControleMovimentoService } from './controle-saida.service';

describe('ControleMovimentoService', () => {
  let service: ControleMovimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleMovimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
