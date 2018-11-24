import { TestBed, inject } from '@angular/core/testing';

import { EventEmmiterService } from './event-emmiter.service';

describe('EventEmmiterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventEmmiterService]
    });
  });

  it('should be created', inject([EventEmmiterService], (service: EventEmmiterService) => {
    expect(service).toBeTruthy();
  }));
});
