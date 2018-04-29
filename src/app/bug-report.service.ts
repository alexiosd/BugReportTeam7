import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BugReportService {
  private endpoint = "http://localhost:3001/bugs"

  constructor(private http: HttpClient) { }

  getBugs() {
    return this.http.get(this.endpoint)
  }

}
