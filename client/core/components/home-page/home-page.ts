// App
import { Component, OnInit, OnDestroy, ViewEncapsulation } from "@angular/core";
import { Logger } from 'angular2-logger/core';

import template from './home-page.html';
import style from './home-page.scss';

@Component({
  moduleId: module.id,
  selector: 'home-page',
  // styles: [style],
  encapsulation: ViewEncapsulation.None,
  template})
export class HomePageComponent implements OnInit, OnDestroy {
  constructor(private logger: Logger) {
  }
  public ngOnInit() {
    this.logger.info('ngOnInit');
  }

  public ngOnDestroy() {
    this.logger.info('ngOnDestroy');
  }
}
