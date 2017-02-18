import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from 'angular2-logger/core';

/**
 * Represents the Kash-Cookie Application.
 * 
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'kc-app',
  template: `
  <alert type="success">hello</alert>
  `,
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
    this._logger.debug('ngOnInit');
  }
  public ngOnDestroy(): void {
    this._logger.debug('ngOnDestroy');
  }

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
}
