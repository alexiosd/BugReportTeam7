import { Injectable } from '@angular/core';
import { BugReportService } from '../bug-report.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Bug } from './bug.model';

@Injectable()
export class BugResolver implements Resolve<Bug> {

  constructor(private bugService: BugReportService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Bug> {
    const id = route.params['id'];
    if (!id) {
      return null;
    }
    return this.bugService.getBug(id);
  }
}
