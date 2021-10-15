import { TestBed } from '@angular/core/testing';

import { ExaminacaoService } from './examinacao.service';

describe('ExaminacaoService', () => {
  let service: ExaminacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
