import { TestBed, inject } from '@angular/core/testing';

import { InvDashInvService } from './inv-dash-inv.service';

describe('InvDashInvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvDashInvService]
    });
  });

  it('should be created', inject([InvDashInvService], (service: InvDashInvService) => {
    expect(service).toBeTruthy();
  }));
});
