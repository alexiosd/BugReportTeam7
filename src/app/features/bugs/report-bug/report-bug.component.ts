import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Bug } from './bug.model';
import { BugProperties, BugReportService } from '../bug-report.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NullifyStatusPipe } from './nullify-status.pipe';
import { BugComment } from '../report-bug-comments/bug-comment.model';


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
  priorities = [{title: 'minor', value: 1}, {title: 'major', value: 2}, {title: 'critical', value: 3}];

  reporter = ['QA', 'PO', 'DEV'];
  status = ['Ready for test', 'Done', 'Rejected'];
  active = false;
  // constructor(private bugs: BugReportService, private route: ActivatedRoute, private nullifyStatus: NullifyStatusPipe) {
  constructor(private bugs: BugReportService, private route: ActivatedRoute) {
    // console.log('Snapshot is: ', this.route.snapshot.params['id']);
  }

  titleFormControl;
  titleFormControlErrorMessage = '';
  titleFormControlValidationMessages = {
    required : 'The title is required',
    minlength: 'The minlength is 4 characters'
  };

  descriptionFormControl;
  descriptionFormControlErrorMessage = '';
  descriptionFormControlValidationMessages = {
    required : 'The description is required',
    minlength: 'The minlength is 10 characters'
  };

  priorityFormControl;
  priorityFormControlErrorMessage = '';
  priorityFormControlValidationMessages = {
    required : 'The priority is required'
  };

  reporterFormControl;
  reporterFormControlErrorMessage = '';
  reporterFormControlValidationMessages = {
    required : 'A reporter is required'
  };

  ngOnInit() {

  this.route.data.subscribe(data => {
      // console.log(data.bug);
      this.buildForm(data.bug);
      this.model = data.bug;
    });

      // if (id) {
      // this.bugs.getBug(id)
      //   .subscribe( b => {
      //     if ((b.status === '') || (b.status === undefined)) {
      //       b.status = 'null';
      //     }
      //     this.buildForm(b); // THIS LINE
      //     // this.bug = b;
      //     this.model = b;
      //     // this.bugForm.setValue(b);
      //   });
      // } else {
      //   this.buildForm(new Bug()); // THIS LINE

      // }
    // this.titleFormControl = this.bugForm.get('title');

    // this.titleFormControl.valueChanges.subscribe( (value: string) => {

    //   this.titleFormControlErrorMessage = '';

    //   if ((this.titleFormControl.touched || this.titleFormControl.dirty) && this.titleFormControl.errors) {
    //     this.titleFormControlErrorMessage =
    //     Object.keys(this.titleFormControl.errors)
    //     .map(c => this.titleFormControlValidationMessages[c]).join(' ');
    //   }
    // });

    /*this.bugForm.get('reporter').valueChanges.subscribe(value => {
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

    /*****************************/

    /**
     * Title Validation
     */
    this.titleFormControl = this.bugForm.get('title');

    this.titleFormControl.valueChanges.subscribe( (value: string) => {

      this.titleFormControlErrorMessage = '';

      if ((this.titleFormControl.touched || this.titleFormControl.dirty) && this.titleFormControl.errors) {
        this.titleFormControlErrorMessage =
        Object.keys(this.titleFormControl.errors)
        .map(c => this.titleFormControlValidationMessages[c]).join(' ');
      }
    });

    /**
     * Description Validation
     */
    this.descriptionFormControl = this.bugForm.get('description');

    this.descriptionFormControl.valueChanges.subscribe( (value: string) => {

      this.descriptionFormControlErrorMessage = '';

      if ((this.descriptionFormControl.touched || this.descriptionFormControl.dirty) && this.descriptionFormControl.errors) {
        this.descriptionFormControlErrorMessage =
        Object.keys(this.descriptionFormControl.errors)
        .map(c => this.descriptionFormControlValidationMessages[c]).join(' ');
      }
    });

    /**
     * Priority Validation
     */
    this.priorityFormControl = this.bugForm.get('priority');

    this.priorityFormControl.valueChanges.subscribe( (value: string) => {

      this.priorityFormControlErrorMessage = '';

      if ((this.priorityFormControl.touched || this.priorityFormControl.dirty) && this.priorityFormControl.errors) {
        this.descriptionFormControlErrorMessage =
        Object.keys(this.priorityFormControl.errors)
        .map(c => this.priorityFormControlValidationMessages[c]).join(' ');
      }
    });

    /**
     * Reporter Validation
     */
    this.reporterFormControl = this.bugForm.get('reporter');

    this.reporterFormControl.valueChanges.subscribe( (value: string) => {

      this.reporterFormControlErrorMessage = '';

      if ((this.reporterFormControl.touched || this.reporterFormControl.dirty) && this.reporterFormControl.errors) {
        this.reporterFormControlErrorMessage =
        Object.keys(this.reporterFormControl.errors)
        .map(c => this.reporterFormControlValidationMessages[c]).join(' ');
      }
    });


  }

  

  private buildForm(bug: Bug) {
    this.bugForm = new FormGroup({
      id: new FormControl(bug.id),
      title: new FormControl(bug.title, [Validators.required, Validators.minLength(4)]),
      description: new FormControl(bug.description, [Validators.required, Validators.minLength(10)]),
      priority: new FormControl(bug.priority, Validators.required),
      reporter: new FormControl(bug.reporter, Validators.required),
      status: new FormControl(bug.status),
      updatedAt: new FormControl(bug.updatedAt),
      createdAt: new FormControl(bug.createdAt)
    });
    this.active = true;
  }

  /*
  priorityIsValid(event) {
    this.priorityValid = !(this.model.priority === null);
  }

  reporterIsValid(event) {
    this.reporterValid = !(this.model.reporter === null);
  }

  statusIsValid(event) {
    this.statusValid = !((this.model.status === null) && (this.model.reporter === 'QA'));
  }
*/
  formSubmit({value}: {value}) {
    /*
    this.priorityIsValid(this.model.priority);
    this.reporterIsValid(this.model.reporter);
    this.statusIsValid(this.model.status);
    */


    // if (!this.bugForm.valid ) {
    //   console.log('error');
    //   return;
    // }

    if (value.id === null ) {
      this.bugs.postBug(value).subscribe((data) => {
        this.bugData = data;
        //this.route.navigate(["/list"]);
      });
    } else {
      this.bugs.putBug(value).subscribe((data) => {
        this.bugData = data;
      });
    }
  }

  saveComment(comment: BugComment) {
    console.log(comment);
  }

}
