import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { BugReportService } from './bug-report.service';
import { ContentComponent } from './content/content.component';
import { ReportBugComponent } from './report-bug/report-bug.component';
import { BugResolver } from './report-bug/bug.resolver';
import { NullifyStatusPipe } from './report-bug/nullify-status.pipe';

export const routes: Routes = [
  { path: 'list', component: ContentComponent },
  { path: 'report', component: ReportBugComponent },
  { path: 'report/:id', component: ReportBugComponent }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContentComponent, ReportBugComponent, NullifyStatusPipe ],
  providers: [BugReportService],
  exports: [RouterModule]
})
export class BugsModule { }
