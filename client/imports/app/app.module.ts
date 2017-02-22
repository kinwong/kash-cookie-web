import { NgModule, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { AppComponent } from './app';
import { AppHeaderComponent, ContentHeaderComponent, IconButtonComponent, IconComponent } from "../components";
import { ClockComponent } from "../components";
import {HomePageComponent, PageNotFoundComponent, ResultPageComponent } from "../pages";

const allRoutes: Routes = [
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full',
  },
  { path: '', component: HomePageComponent },
  { path: '**', component: PageNotFoundComponent }
];
 /**
  * Represents the application root module.
  * 
  * @export
  * @class AppModule
  */
 @NgModule({
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    // App
    AppComponent,
    AppHeaderComponent,
    ContentHeaderComponent,
    // Shared
    IconButtonComponent,
    IconComponent,
    ClockComponent,
    // Pages
    HomePageComponent,
    PageNotFoundComponent,
    ResultPageComponent,
  ],
  // providers:
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccountsModule,
    RouterModule.forRoot(allRoutes),
    // Components
  ],
  providers: [Logger],
})
export class AppModule implements OnInit, OnDestroy {
  constructor(private _logger: Logger) {
  }
  public ngOnInit(): void {
    this._logger.debug('ngOnInit');
  }
  public ngOnDestroy(): void {
    this._logger.debug('ngOnDestroy');
  }
}
