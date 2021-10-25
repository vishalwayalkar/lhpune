import { TestBed } from '@angular/core/testing';

import { LighthouseSerService } from './lighthouse-ser.service';

describe('LighthouseSerService', () => {
  let service: LighthouseSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LighthouseSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
