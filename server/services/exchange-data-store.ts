import * as log from 'winston';
import stripJsonComments = require('strip-json-comments');

import { KashCookie } from '../../imports/api';
import { IExchange } from '../../imports/api';

/**
 * 
 * @export
 * @class ExchangeDataStore
 */
export class ExchangeDataStore {
  private readonly _mapMicToExchanges: Map<string, IExchange> = 
  new Map<string, IExchange>();

  public start(): void {
    log.info('Exchange-Data-Store starting...');
    const exchanges = JSON.parse(stripJsonComments(Assets.getText('exchanges.json')));
    for (const item of exchanges) {
      const exchange: IExchange = item;
      this._mapMicToExchanges.set(exchange.mic, exchange);
    }
    Meteor.methods({
      retrieveExchanges: (): IExchange[] => {
        log.info('exchanges called');
        return Array.from<IExchange>(this._mapMicToExchanges.values());
      },
      retrieveExchange: (mic: string): IExchange => {
        return this._mapMicToExchanges.get(mic);
      }
    });
    log.info('Exchange-Data-Store start done.');
  }
}
