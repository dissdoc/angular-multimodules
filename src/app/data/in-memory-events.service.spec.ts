import { TestBed, inject } from '@angular/core/testing';

import { InMemoryEventsService } from './in-memory-events.service';

describe('InMemoryEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryEventsService]
    });
  });

  it('should be created', inject([InMemoryEventsService], (service: InMemoryEventsService) => {
    expect(service).toBeTruthy();
  }));
});
