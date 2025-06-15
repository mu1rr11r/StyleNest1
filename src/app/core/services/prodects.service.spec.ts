import { TestBed } from '@angular/core/testing';

import { ProdectsService } from './prodects.service';

describe('ProdectsService', () => {
  let service: ProdectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
