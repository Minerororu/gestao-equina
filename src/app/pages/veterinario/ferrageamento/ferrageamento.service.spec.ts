import { TestBed } from '@angular/core/testing';

import { FerrageamentoService } from './ferrageamento.service';

describe('FerrageamentoService', () => {
  let service: FerrageamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FerrageamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
