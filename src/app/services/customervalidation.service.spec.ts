import { TestBed } from '@angular/core/testing';

import { CustomervalidationService } from './customervalidation.service';

describe('CustomervalidationService', () => {
  let service: CustomervalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomervalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
