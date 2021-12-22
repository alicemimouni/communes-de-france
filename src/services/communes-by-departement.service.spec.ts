import { TestBed } from '@angular/core/testing';

import { CommunesByDepartementService } from './communes-by-departement.service';

describe('CommunesByDepartementService', () => {
  let service: CommunesByDepartementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunesByDepartementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
