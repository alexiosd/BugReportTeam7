import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgt7-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  key: String = 'title';
  direction: String = 'asc'; // "asc", "des"

  constructor() { }

  ngOnInit() {
  }

  sort(key) {
    if (this.key === key) {
      (this.direction === 'asc'?'des':'asc');
    }
    else {
      this.direction = 'asc';
    }
    this.key = key;

  }

}
