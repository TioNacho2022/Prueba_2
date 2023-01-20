import { TestBed } from '@angular/core/testing';

import { ApiDummyJsonService } from './api-dummy-json.service';

describe('ApiDummyJsonService', () => {
  let service: ApiDummyJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDummyJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
