import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { Accounts } from 'meteor/accounts-base';

import template from './app.html';
//import style from './app.scss';

/**
 * Represents the Kash-Cookie Application.
 *
 * @export
 * @class AppComponent
 */
@Component({
  moduleId: module.id,
  selector: 'kc-app',
  providers: [Logger],
  styleUrls: ['./app.scss'],
  encapsulation: ViewEncapsulation.None,
  template
})
export class AppComponent implements OnInit, OnDestroy {
  public environment;

  public moduleId: string;
  private _opened = false;

  constructor(private router: Router, private _logger: Logger) {
    this.moduleId = module.id;
    this.environment = 'Test';
  }
  public ngOnChanges() {
    this._logger.debug('ngOnChanges');
  }
  public ngOnInit(): void {

    // tslint:disable-next-line:no-console
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
