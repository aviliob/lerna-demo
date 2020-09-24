import { TestBed } from '@angular/core/testing';

import { BrandButtonService } from './brand-button.service';

describe('BrandButtonService', () => {
  let service: BrandButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
