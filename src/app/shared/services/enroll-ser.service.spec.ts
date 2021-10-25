import { TestBed } from '@angular/core/testing';

import { EnrollSerService } from './enroll-ser.service';

describe('EnrollSerService', () => {
  let service: EnrollSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
