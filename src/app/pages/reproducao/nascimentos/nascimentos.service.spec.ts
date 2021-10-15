import { TestBed } from '@angular/core/testing';

import { NascimentoService } from './nascimentos.service';

describe('NascimentoService', () => {
  let service: NascimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NascimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
