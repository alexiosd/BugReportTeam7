import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBugCommentsComponent } from './report-bug-comments.component';

describe('ReportBugCommentsComponent', () => {
  let component: ReportBugCommentsComponent;
  let fixture: ComponentFixture<ReportBugCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportBugCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBugCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
