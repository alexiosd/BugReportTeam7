import { Component, OnInit } from '@angular/core';
import { BugReportService } from '../../bug-report.service';

@Component({
  selector: 'bgt7-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private bugs: BugReportService) { }

  ngOnInit() {
    this.bugs.getBugs().subscribe((data)=> {
      console.log('>BUGS DATA>', data);
    })
  }

}
