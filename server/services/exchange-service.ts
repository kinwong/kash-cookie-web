
import * as log from 'winston';
import stripJsonComments = require('strip-json-comments');
import { KashCookie, IExchange } from '../../imports/api';

/**
 * 
 * @export
 * @class ExchangeStore
 */
export class ExchangeService {
  private readonly _exchanges: Map<string, IExchange> = 
  new Map<string, IExchange>();
  public start(): void {
    log.info('Exchange-Store starting...');

    const exchanges = JSON.parse(stripJsonComments(Assets.getText('exchanges.json')));
    for (const item of exchanges) {
      const exchange: IExchange = item;
      if (this._exchanges.has(exchange.mic)) {
        log.warn('mic[%s] has already been inserted.', exchange.mic);
      }
      this._exchanges.set(exchange.mic, exchange);
    }
    Meteor.methods({
      dataExchangesRetrieveAll: (): IExchange[] => {
        return Array.from<IExchange>(this._exchanges.values());
      },
      dataExchangeRetrieve: (mic: string): IExchange => {
        return this._exchanges.get(mic);
      }
    });
    log.info('Exchange-Store started - %d exchanges read.', this._exchanges.size);
  }
}
