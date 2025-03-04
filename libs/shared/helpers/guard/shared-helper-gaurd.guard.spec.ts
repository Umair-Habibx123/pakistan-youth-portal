import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './shared-helper-gaurd.guard';

describe('SharedHelperGaurdGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
