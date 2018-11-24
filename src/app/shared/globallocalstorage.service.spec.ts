import { TestBed, inject } from '@angular/core/testing';

import { GloballocalstorageService } from './globallocalstorage.service';

describe('GloballocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GloballocalstorageService]
    });
  });

  it('should be created', inject([GloballocalstorageService], (service: GloballocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
