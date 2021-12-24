import { TestBed } from '@angular/core/testing';

import { CommuneDetailService } from './commune-detail.service';

describe('CommunesService', () => {
  let service: CommuneDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommuneDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
