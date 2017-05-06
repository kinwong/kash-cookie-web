// Angular2 core modules.
import { NgModule, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// OpenSource
import { Logger } from 'angular2-logger/core';
import { AccountsModule } from 'angular2-meteor-accounts-ui';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

// Core components
import * as Services from '../core/services';
import { AppComponent } from './app';
import { AppHeaderComponent, ContentHeaderComponent } from "../core/components";
import {
  HomePageComponent, PageNotFoundComponent, LoginPageComponent, RegisterPageComponent,
  ExchangeListComponent 
} from "../core/components";

import { ClockComponent } from './clock/clock';

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
    ClockComponent,
    // Pages
    HomePageComponent,
    PageNotFoundComponent,
    LoginPageComponent,
    RegisterPageComponent,
    // shared components
    ExchangeListComponent,
  ],
  // providers:
  imports: [
    // Angular 2 modules.
    CommonModule, BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(ALL_ROUTES),
    // Bootstrap module.
    // Fontawesome module.
    Angular2FontawesomeModule,
    // Application defined modules.
    AccountsModule,
    // Components
  ],
  providers: [
    Logger,
    Services.AlertService,
    Services.AuthenticationService, 
    Services.PermissionGuard, 
    Services.PermissionGuardFake
  ],
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
