import { TestBed } from '@angular/core/testing';

import { DepartementsByRegionService } from './departementsByRegion.service';

describe('DepartementsService', () => {
  let service: DepartementsByRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartementsByRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
