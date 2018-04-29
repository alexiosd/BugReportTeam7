import { Component, OnInit } from '@angular/core';
import { BugReportService, BugProperties } from '../../bug-report.service';

@Component({
  selector: 'bgt7-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private bugs: BugReportService) { }

  key: String = 'title';
  bugsData: BugProperties[];

  direction: String = 'asc'; // "asc", "des"


  ngOnInit() {
    this.bugs.getBugs().subscribe((data)=> {
      this.bugsData = data; 
    })
  }

  sort(key) {
    if (this.key === key) {
      this.direction = (this.direction === 'asc'?'des':'asc');
    }
    else {
      this.direction = 'asc';
    }
    this.key = key;

  }

}
