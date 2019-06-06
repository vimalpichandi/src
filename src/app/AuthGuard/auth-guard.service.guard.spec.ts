import { TestBed, async, inject } from '@angular/core/testing';

import { NoAuthGuard.ServiceGuard } from './no-auth-guard.service.guard';

describe('NoAuthGuard.ServiceGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthGuard.ServiceGuard]
    });
  });

  it('should ...', inject([NoAuthGuard.ServiceGuard], (guard: NoAuthGuard.ServiceGuard) => {
    expect(guard).toBeTruthy();
  }));
});
