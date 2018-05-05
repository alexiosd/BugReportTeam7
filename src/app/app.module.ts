import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
