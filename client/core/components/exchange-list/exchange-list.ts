// App
import { Mongo } from 'meteor/mongo';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Logger } from 'angular2-logger/core';
import { MeteorObservable, MongoObservable } from 'meteor-rxjs';
import { Observable, Subscription } from 'rxjs';

import * as api from '../../../../imports/api';

import template from './exchange-list.html';

const spots = new MongoObservable.Collection(api.dataMarketSpot);

@Component({
  moduleId: module.id,
  selector: 'exchange-list',
  template})

export class ExchangeListComponent implements OnInit, OnDestroy {
  public spot: api.ISpot;
  public exchanges: api.IExchange[];
  private _subscription: Subscription;

  constructor(private logger: Logger) {
  }
  public ngOnInit() {
    this.logger.info('ngOnInit');
    this._subscription = MeteorObservable.subscribe(
      api.dataMarketSpot, ['0005.HK']).subscribe(spot => this.spot = spot as api.ISpot);
  }

  public ngOnDestroy() {
    this.logger.info('ngOnDestroy');
    this._subscription.unsubscribe();
  }
  public onFetch(): void {
    this.logger.info('wefwefef');
    this.exchanges = [];
    this.fetchExchanges().subscribe(x => this.exchanges = x);

  }

  public fetchExchanges(): Observable<api.IExchange[]> {
    return MeteorObservable.call<api.IExchange[]>(
      api.dataExchangesRetrieveAll);
  }
}
