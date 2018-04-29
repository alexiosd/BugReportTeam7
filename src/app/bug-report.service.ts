import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class BugReportService {
  private endpoint = 'http://localhost:3001/bugs';

  constructor(private http: HttpClient) { }

  getBugs(sort: String, dir: String): Observable<Array<BugProperties>> {
    return this.http.get<Array<BugProperties>>(`${this.endpoint}?sort=${sort},${dir}`);
  }

}

export interface BugProperties {
  title: string;
  priority: string;
  reporter: string;
  dateCreated: string;
  status: string;
}
