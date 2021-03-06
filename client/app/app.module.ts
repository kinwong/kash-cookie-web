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
import * as Components from '../core/components';

import { ClockComponent } from './clock/clock';

import { ALL_ROUTES } from './routes';
import * as DevExtreme from 'devextreme-angular';

// require('../icons/dxicons.ttf');
// require('../icons/dxicons.woff');


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
    Components.HomePageComponent,
    Components.PageNotFoundComponent,
    Components.LoginPageComponent,
    Components.RegisterPageComponent,
    // shared components
    Components.ExchangeListComponent,
    Components.StrategyListComponent,
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
    DevExtreme.DxBoxModule,
    DevExtreme.DxNavBarModule,
    DevExtreme.DxButtonModule,
    DevExtreme.DxDataGridModule,
    DevExtreme.DxScrollViewModule,
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
