import { TestBed, inject } from '@angular/core/testing';

import { ClassTreeService } from './class-tree.service';

describe('ClassTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassTreeService]
    });
  });

  it('should be created', inject([ClassTreeService], (service: ClassTreeService) => {
    expect(service).toBeTruthy();
  }));
});
