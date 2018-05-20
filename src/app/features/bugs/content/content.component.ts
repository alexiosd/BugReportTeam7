//import { model } from 'mongoose';
import { Component, OnInit } from '@angular/core';
import { BugReportService, BugProperties } from '../bug-report.service';
import { NgForm } from '@angular/forms';
import { Searchtitle } from '../../../searchtitle';

@Component({
  selector: 'bgt7-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  model: Searchtitle;

  constructor(private bugs: BugReportService) { }

  key: String = 'title';
  bugsData: BugProperties[];

  direction: String = 'asc'; // "asc", "des"


  ngOnInit() {
    this.getTheBugs(this.key, this.direction);
    this.model = new Searchtitle();
  }

  searchme(value) {
    this.searchTheBugs(value);
  }

  sort(key) {
    if (this.key === key) {
      this.direction = (this.direction === 'asc' ? 'desc' : 'asc');
    } else {
      this.direction = 'asc';
    }
    this.key = key;
    this.getTheBugs(this.key, this.direction);
  }

  getTheBugs(key: String, dir: String) {
    this.bugs.getBugs(key, dir).subscribe((data) => {
      this.bugsData = data;
    });
  }

  searchTheBugs(title: String) {
    this.bugs.searchBugs(title).subscribe((data) => {
      this.bugsData = data;
    });
  }

}
