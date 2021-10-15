import { TestBed } from '@angular/core/testing';

import { ControleReproducaoService } from './controle-controle-reproducao.service';

describe('ControleReproducaoService', () => {
  let service: ControleReproducaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleReproducaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
