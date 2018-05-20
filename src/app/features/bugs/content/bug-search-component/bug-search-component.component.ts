import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BugReportService } from '../../bug-report.service';
import { switchMap } from 'rxjs/operators';
import { Bug } from '../../report-bug/bug.model';

@Component({
  selector: 'bgt7-bug-search-component',
  templateUrl: './bug-search-component.component.html',
  styleUrls: ['./bug-search-component.component.css']
})
export class BugSearchComponent implements OnInit {
  bugs$: Observable<Bug[]>;
  private searchTerms = new Subject<string>();

  constructor(private BugService: BugReportService) {}

  searchBug(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.bugs$ = this.searchTerms.pipe(
      switchMap((term: string) => this.BugService.searchBug(term)),
    );
  }
}
