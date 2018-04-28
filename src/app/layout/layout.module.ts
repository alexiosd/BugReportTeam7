import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper/wrapper.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WrapperComponent, HeaderComponent, FooterComponent, ContentComponent],
  exports: [
    WrapperComponent
  ]
})
export class LayoutModule { }
