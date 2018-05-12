import { Component, OnInit } from '@angular/core';
import { Bug } from './bug.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { BugProperties, BugReportService } from '../bug-report.service';

@Component({
  selector: 'bgt7-report-bug',
  templateUrl: './report-bug.component.html',
  styleUrls: ['./report-bug.component.css']
})
export class ReportBugComponent implements OnInit {

  bugForm: FormGroup;
  model = new Bug();
  priorityValid: boolean;
  reporterValid: boolean;
  statusValid: boolean;
  bugData: BugProperties[];
  priorities = ['minor', 'major', 'critical'];
  reporter = ['QA', 'PO', 'DEV'];
  status = ['Ready for test', 'Done', 'Rejected'];

  constructor(private bugs: BugReportService) { }

  ngOnInit() {
    this.bugForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl()
    });
    /*
    )
    this.model = new Bug();
    this.model.priority = null;
    this.model.reporter = null;
    this.model.status = null;
    debugger;*/
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
    if (!form.valid || !this.priorityValid || !this.reporterValid || !this.statusValid) {
      console.log('error');
      return;
    }

    this.bugs.postBug(this.model).subscribe((data) => {
      this.bugData = data;
    });
  }

}
