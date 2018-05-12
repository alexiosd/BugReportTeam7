import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [

  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [
    HeaderComponent, FooterComponent
  ]
})
export class CoreModule { }
