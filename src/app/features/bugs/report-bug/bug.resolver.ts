import { Injectable } from '@angular/core';
import { BugProperties, BugReportService } from '../bug-report.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BugResolver implements Resolve<BugProperties> {

  constructor(private bugService: BugReportService, private roouter: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BugProperties> {
    const id = route.paramMap.get('id');
    return this.bugService.getBug(id);
  }
}
