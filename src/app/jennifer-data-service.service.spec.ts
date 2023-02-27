import { TestBed } from '@angular/core/testing';

import { JenniferDataServiceService } from './jennifer-data-service.service';

describe('JenniferDataServiceService', () => {
  let service: JenniferDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenniferDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
