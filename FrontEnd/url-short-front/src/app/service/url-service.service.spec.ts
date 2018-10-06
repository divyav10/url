import { TestBed } from '@angular/core/testing';

import { UrlServiceService } from './url-service.service';

describe('UrlServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlServiceService = TestBed.get(UrlServiceService);
    expect(service).toBeTruthy();
  });
});
