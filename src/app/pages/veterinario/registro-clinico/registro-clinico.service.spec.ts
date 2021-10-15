import { TestBed } from '@angular/core/testing';

import { RegistroClinicoService } from './registro-clinico.service';

describe('RegistroClinicoService', () => {
  let service: RegistroClinicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroClinicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
