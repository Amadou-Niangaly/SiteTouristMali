import { TestBed } from '@angular/core/testing';

import { ZoneTouristService } from './zone-tourist.service';

describe('ZoneTouristService', () => {
  let service: ZoneTouristService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneTouristService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
