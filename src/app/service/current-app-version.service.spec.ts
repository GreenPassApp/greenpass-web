import { TestBed } from '@angular/core/testing';

import { CurrentAppVersionService } from './current-app-version.service';

describe('CurrentAppVersionService', () => {
  let service: CurrentAppVersionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentAppVersionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
