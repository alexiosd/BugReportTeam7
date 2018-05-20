import { model } from 'mongoose';
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

  searchme1(value: string) {
    // this.model.theTitle = value.toUpperCase();
    alert(value);


  }

  searchme(value) {
    this.searchTheBugs(value);
      // alert(data);
      // alert('called fromoutside');
    // this.searchTheBugs(value, value);
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

  sort1(key) {
    this.getTheBugs(this.key, this.direction);
  }





  sortByName() {
    alert('sort');
    // if (this.key === key) {
    //   this.direction = (this.direction === 'asc' ? 'desc' : 'asc');
    // } else {
    //   this.direction = 'asc';
    // }
    // this.key = key;
    // this.getTheBugs(this.key, this.direction);
  }

  getTheBugs(key: String, dir: String) {
    this.bugs.getBugs(key, dir).subscribe((data) => {
      this.bugsData = data;
    });
  }
  searchTheBugs(title: String) {
    this.bugs.searchBugs(title).subscribe((data) => {
      this.bugsData = data;
      // alert(data);
      // alert('called fromoutside');

    });

  }

}
