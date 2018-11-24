import { TestBed, inject } from '@angular/core/testing';

import { DynamicformbuilderService } from './dynamicformbuilder.service';

describe('DynamicformbuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicformbuilderService]
    });
  });

  it('should be created', inject([DynamicformbuilderService], (service: DynamicformbuilderService) => {
    expect(service).toBeTruthy();
  }));
});
