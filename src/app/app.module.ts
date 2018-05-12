import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { CoreModule } from './core/core.module';
import { BugsModule } from './features/bugs/bugs.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BugsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
