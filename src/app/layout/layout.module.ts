import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BugReportService } from '../bug-report.service';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    BugReportService
  ],
  declarations: [WrapperComponent, HeaderComponent, FooterComponent, ContentComponent],
  exports: [
    WrapperComponent
  ]
})
export class LayoutModule { }
