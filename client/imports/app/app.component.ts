import 'zone.js';
import 'reflect-metadata';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angular2-logger/core';
import { Accounts } from 'meteor/accounts-base'; 

/**
 * Represents the Kash-Cookie Application.
 * 
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'kc-app',
  template: `
<div>
  <md-toolbar color="primary">
    <span></span>
    <span>Kash-Cookie</span>
    <button md-icon-button [md-menu-trigger-for]="menu">
    </button>
  </md-toolbar>
  <md-menu x-position="before" #menu="mdMenu">
    <button md-menu-item>Option 1</button>
    <button md-menu-item>Option 2</button>
  </md-menu>
  <md-card>
    <button md-button>All</button>
    <button md-raised-button>Of</button>
    <button md-raised-button color="primary">The</button>
    <button md-raised-button color="accent">Buttons</button>
  </md-card>
  <span class="done">
    <button md-fab>
      <md-icon>check circle</md-icon>
    </button>
  </span>
  
</div>`,
  providers: [Logger],
})
export class AppComponent implements OnInit, OnDestroy {
  public environment;

  private _opened = false;

  constructor(private _logger: Logger) {
    this.environment = 'Test';
  }
  public ngOnChanges() {
    this._logger.debug('ngOnChanges');
  }
  public ngOnInit(): void {
    //Accounts.us
    console.info('ngOnInit');
    this._logger.debug('ngOnInit');
  }
  public ngOnDestroy(): void {
    this._logger.debug('ngOnDestroy');
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
