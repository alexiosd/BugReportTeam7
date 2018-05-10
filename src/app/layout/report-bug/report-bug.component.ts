import { Component, OnInit } from '@angular/core';
import { Bug } from './bug.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bgt7-report-bug',
  templateUrl: './report-bug.component.html',
  styleUrls: ['./report-bug.component.css']
})
export class ReportBugComponent implements OnInit {

  model: Bug;
  priorityValid: boolean;
  reporterValid: boolean;
  statusValid: boolean;

  constructor() { }

  ngOnInit() {
    this.model = new Bug();
    this.model.priority = null;
    this.model.reporter = null;
    this.model.status = null;
    debugger;
  }

  priorityIsValid(event) {
    this.priorityValid = !(this.model.priority === null);
  }

  reporterIsValid(event) {
    this.reporterValid = !(this.model.reporter === null);
  }

  statusIsValid(event) {
    this.statusValid = !((this.model.status === null) && (this.model.reporter === 'QA'));
  }

  formSubmit(form: NgForm) {
    this.priorityIsValid(this.model.priority);
    this.reporterIsValid(this.model.reporter);
    this.statusIsValid(this.model.status);
  debugger;
  if (!form.valid || !this.priorityValid || !this.reporterValid || !this.statusValid) {
      console.log('error');
      return;
    }

    console.log(form.value);
  }

}
