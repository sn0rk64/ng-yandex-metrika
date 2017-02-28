import { TestBed, inject } from '@angular/core/testing';

import { LibService } from './lib.service';

describe('LibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibService]
    });
  });

  it('should ...', inject([LibService], (service: LibService) => {
    expect(service).toBeTruthy();
  }));
});