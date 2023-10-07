import { TestBed } from '@angular/core/testing';

import { SoftfobiaLibraryService } from './softfobia-library.service';

describe('SoftfobiaLibraryService', () => {
  let service: SoftfobiaLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftfobiaLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
