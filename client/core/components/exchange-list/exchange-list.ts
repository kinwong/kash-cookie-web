// App
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Logger } from 'angular2-logger/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs';

import { IExchange } from '../../../../imports/api';

import template from './exchange-list.html';

@Component({
  moduleId: module.id,
  selector: 'exchange-list',
  template})

export class ExchangeListComponent implements OnInit, OnDestroy {
  public exchanges: IExchange[];
  
  constructor(private logger: Logger) {
  }
  public ngOnInit() {
    this.logger.info('ngOnInit');
  }

  public ngOnDestroy() {
    this.logger.info('ngOnDestroy');
  }
  public onFetch(): void {
    this.logger.info('wefwefef');
    this.exchanges = [];
    // this.exchanges.push(new IExchange{});

    this.fetchExchanges().subscribe(x => this.exchanges = x);

  }

  public fetchExchanges(): Observable<IExchange[]> {
    return MeteorObservable.call<IExchange[]>(
      'retrieveExchanges');
  }
}
