import { TestBed } from '@angular/core/testing';

import { PackSelectorService } from './pack-selector.service';

describe('PackSelectorService', () => {
  let service: PackSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
