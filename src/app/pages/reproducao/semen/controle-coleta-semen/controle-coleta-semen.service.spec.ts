import { TestBed } from '@angular/core/testing';

import { VacinaService } from './controle-coleta-semen.service';

describe('VacinaService', () => {
  let service: VacinaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacinaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
