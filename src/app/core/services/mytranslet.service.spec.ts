import { TestBed } from '@angular/core/testing';

import { MytransletService } from './mytranslet.service';

describe('MytransletService', () => {
  let service: MytransletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytransletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
