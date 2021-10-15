import { TestBed } from '@angular/core/testing';

import { DemonstrativoService } from './demonstrativo.service';

describe('DemonstrativoService', () => {
  let service: DemonstrativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemonstrativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
