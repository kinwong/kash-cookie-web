import { NgModule, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { AppComponent } from './app';
import { AppHeaderComponent, ContentHeaderComponent, IconButtonComponent, IconComponent } from "../components";
import { ClockComponent, UserListComponent } from "../components";
import { HomePageComponent, PageNotFoundComponent, ResultPageComponent } from "../pages";
import { AlertService, AuthenticationService, PermissionGuard } from '../services';
import { ALL_ROUTES } from './routes';

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
    UserListComponent,
  ],
  // providers:
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AccountsModule,
    RouterModule.forRoot(ALL_ROUTES),
    // Components
  ],
  providers: [
    Logger,
    AlertService,
    AuthenticationService, PermissionGuard
  ],
})
export class AppModule implements OnInit, OnDestroy {
  constructor(private logger: Logger) {
  }
  public ngOnInit(): void {
    this.logger.debug('ngOnInit');
  }
  public ngOnDestroy(): void {
    this.logger.debug('ngOnDestroy');
  }
}
