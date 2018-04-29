import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bgt7-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  key: String = 'title';
  reverse: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}
