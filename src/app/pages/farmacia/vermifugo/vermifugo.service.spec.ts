import { TestBed } from '@angular/core/testing';

import { VermifugoService } from './vermifugo.service';

describe('VermifugoService', () => {
  let service: VermifugoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VermifugoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
