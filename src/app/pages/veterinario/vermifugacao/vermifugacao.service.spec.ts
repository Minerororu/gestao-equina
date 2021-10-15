import { TestBed } from '@angular/core/testing';

import { VermifugacaoService } from './vermifugacao.service';

describe('VermifugacaoService', () => {
  let service: VermifugacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VermifugacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
