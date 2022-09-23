import { TestBed } from '@angular/core/testing';

import { CrisisDetailSolverService } from './crisis-detail-solver.service';

describe('CrisisDetailSolverService', () => {
  let service: CrisisDetailSolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrisisDetailSolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
