import { Component, OnInit, Input, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
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
  @Output() commentEmitter = new EventEmitter();

  ngOnInit() {
   this.commentForm = new FormGroup({
    reporter: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.model);
  }

  formSubmit({value}: {value}) {
    if (!this.commentForm.valid ) {
      console.log('error');
      return;
    }

    this.commentEmitter.emit(value);
  }

}
