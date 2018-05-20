import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'bgt7-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  constructor() {}
  @Input() page: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter();
  @Output() pageSizeChanged = new EventEmitter();

  ngOnInit() {}

  changePage(forward) {
    if (forward === false && this.page === 0) {
      return;
    }
    this.pageChanged.emit(forward);
  }

  onPageSizeValueChange(pageSizeValue) {

    if (!pageSizeValue) {
      return;
    }

    this.pageSizeChanged.emit(pageSizeValue);
  }


}

