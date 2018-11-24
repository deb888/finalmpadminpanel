import { TestBed, inject } from '@angular/core/testing';

import { GlobalformService } from './globalform.service';

describe('GlobalformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalformService]
    });
  });

  it('should be created', inject([GlobalformService], (service: GlobalformService) => {
    expect(service).toBeTruthy();
  }));
});
