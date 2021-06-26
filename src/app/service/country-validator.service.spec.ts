import { TestBed } from '@angular/core/testing';

import { CountryValidatorService } from './country-validator.service';

describe('CountryValidatorService', () => {
  let service: CountryValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
