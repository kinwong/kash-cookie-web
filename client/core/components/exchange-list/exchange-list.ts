// App
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Logger } from 'angular2-logger/core';

import template from './exchange-list.html';

@Component({
  moduleId: module.id,
  selector: 'exchange-list',
  template})
export class ExchangeListComponent implements OnInit, OnDestroy {
  constructor(private logger: Logger) {
  }
  public ngOnInit() {
    this.logger.info('ngOnInit');
  }

  public ngOnDestroy() {
    this.logger.info('ngOnDestroy');
  }
}
