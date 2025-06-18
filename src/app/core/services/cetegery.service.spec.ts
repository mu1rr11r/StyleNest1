import { TestBed } from '@angular/core/testing';

import { CetegeryService } from './cetegery.service';

describe('CetegeryService', () => {
  let service: CetegeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CetegeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
