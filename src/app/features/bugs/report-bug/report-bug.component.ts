import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Bug } from './bug.model';
import { BugProperties, BugReportService } from '../bug-report.service';
import { ActivatedRoute, Params } from '@angular/router';


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
  bug: BugProperties;
  bugData: BugProperties[];
  priorities = ['minor', 'major', 'critical'];
  reporter = ['QA', 'PO', 'DEV'];
  status = ['Ready for test', 'Done', 'Rejected'];

  constructor(private bugs: BugReportService, private route: ActivatedRoute) {
    console.log('Snapshot is: ', this.route.snapshot.params['id']);
  }


  ngOnInit() {

    this.bugForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      reporter: new FormControl('', Validators.required),
      status: new FormControl()
    });

    this.bugs.getBug(this.route.snapshot.params['id'])
      .subscribe(b => {
        this.bug = b;
      });

    this.bugForm.get('reporter').valueChanges.subscribe(value => {
      const statusFormControl = this.bugForm.get('status');

      if (value === 'QA') {
        statusFormControl.setValidators(Validators.required);
      } else {
        statusFormControl.clearValidators();
      }
      statusFormControl.updateValueAndValidity();
    });

    /*
    this.route.data.subscribe((data: { bugs: Bugs[]}) => {
      console.log(data.bugs);
      });
    */
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
