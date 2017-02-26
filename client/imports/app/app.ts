import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from 'angular2-logger/core';
import { Accounts } from 'meteor/accounts-base';

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
  template: `
    <div class="app-content">
      <app-header></app-header>
      <main>
          <router-outlet></router-outlet>
      </main>
      <clock></clock>
      <footer></footer>
    <div>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  public environment;

  private _opened = false;

  constructor(private router: Router, private _logger: Logger) {
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
