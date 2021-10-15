import { TestBed } from '@angular/core/testing';

import { ControleFolicularService } from './controle-folicular.service';

describe('ControleFolicularService', () => {
  let service: ControleFolicularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleFolicularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
