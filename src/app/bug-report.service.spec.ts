import { TestBed, inject } from '@angular/core/testing';

import { BugReportService } from './bug-report.service';

describe('BugReportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BugReportService]
    });
  });

  it('should be created', inject([BugReportService], (service: BugReportService) => {
    expect(service).toBeTruthy();
  }));
});
