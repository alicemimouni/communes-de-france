import { TestBed } from '@angular/core/testing';

import { SearchCommuneService } from './search-commune.service';

describe('SearchCommuneService', () => {
  let service: SearchCommuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCommuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
