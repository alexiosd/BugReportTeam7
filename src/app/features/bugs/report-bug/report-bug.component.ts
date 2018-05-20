import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Bug } from './bug.model';
import { BugProperties, BugReportService } from '../bug-report.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(private bugs: BugReportService, private route: ActivatedRoute , private router: Router) {}

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
      this.buildForm(data.bug);
      this.model = data.bug;
    });

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

  formSubmit({value}: {value}) {
    const methodToInvoke = value.id 
    ? this.bugs.putBug(value)
    : this.bugs.postBug(value)

    methodToInvoke.subscribe((data) => {
      this.router.navigate(["/list"]);
    });
  }

  saveComment(comment: BugComment) {
    console.log(comment);
    this.model.comments.push(comment);
    // spread operator ES6
    // const tempModel = {...this.model, comments: {this.model.comments, comment}}
    this.bugs.putBug(this.model).subscribe();
  }

}
