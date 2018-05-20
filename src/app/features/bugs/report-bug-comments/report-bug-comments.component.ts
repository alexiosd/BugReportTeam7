import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bgt7-report-bug-comments',
  templateUrl: './report-bug-comments.component.html',
  styleUrls: ['./report-bug-comments.component.css']
})
export class ReportBugCommentsComponent implements OnInit, OnChanges {

  commentForm: FormGroup;

  constructor() { }

  @Input() model;

  ngOnInit() {
   this.commentForm = new FormGroup({
    reporter: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.model);
  }

}
