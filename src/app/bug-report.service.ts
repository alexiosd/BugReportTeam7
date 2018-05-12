import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Bug } from './layout/report-bug/bug.model';



@Injectable()
export class BugReportService {
  private endpoint = 'http://localhost:3001/bugs';

  constructor(private http: HttpClient) { }

  getBugs(sort: String, dir: String): Observable<Array<BugProperties>> {
    return this.http.get<Array<BugProperties>>(`${this.endpoint}?sort=${sort},${dir}`);
  }

  postBug(bug: Bug): Observable<Array<BugProperties>> {
    debugger;
    return this.http.post<Array<BugProperties>>(this.endpoint, bug);
  }

}

export interface BugProperties {
  id: string;
  title: string;
  description: string;
  priority: string;
  reporter: string;
  updatedAt: string;
  createdAt: string;
  status: string;
}
