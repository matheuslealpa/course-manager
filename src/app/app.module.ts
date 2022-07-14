import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {CourseListComponent} from "./courses/course-list.component";
import {StarComponent} from "./star/star.component";
import {ReplacePipe} from "./pipe/replace.pipe";
import {NavBarComponents} from "./nav-bar/nav-bar.components";
import {RouterModule} from "@angular/router";
import {Erro404Component} from "./erro-404/erro-404.component";


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'courses',
        pathMatch: 'full'
      },
      {
        path: 'courses',
        component: CourseListComponent,
      },
      {
        path: '**',
        component: Erro404Component

      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
