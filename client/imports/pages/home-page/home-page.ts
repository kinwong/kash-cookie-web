// App
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Logger } from 'angular2-logger/core';

@Component({
  moduleId: module.id,
  styleUrls:['.\home-page.scss'],
  selector: 'home-page',
  template: `
  <div>
  <section>
  Home Page.
  </section>
  </div>
  `
})
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
