import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';
import { ReportBugComponent } from './layout/report-bug/report-bug.component';

export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'report', component: ReportBugComponent }
];
