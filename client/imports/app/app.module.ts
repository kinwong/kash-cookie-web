import { NgModule, OnInit, OnDestroy, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
// Angular2 Material
import { MdCoreModule } from '@angular2-material/core';
import { MdToolbarModule} from '@angular2-material/toolbar';
import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdInputModule } from '@angular2-material/input';
import { MdListModule } from '@angular2-material/list';
import { MdMenuModule } from '@angular2-material/menu';
import { MdTabsModule } from '@angular2-material/tabs';
import { MdTooltipModule} from '@angular2-material/tooltip';
import {MdCardModule} from '@angular2-material/card';
import {MdIconModule, MdIconRegistry} from '@angular2-material/icon';
import 'hammerjs';

// OpenSource
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
    // Angular 2 modules.
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(ALL_ROUTES),

    // Angular 2 Material modules.
    MdCoreModule, MdToolbarModule, MdButtonModule, MdButtonToggleModule, MdCardModule,
    MdIconModule,
    // Application defined modules.
    AccountsModule,
    // Components
  ],
  providers: [
    Logger,
    AlertService,
    AuthenticationService, PermissionGuard,
    MdIconRegistry
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
