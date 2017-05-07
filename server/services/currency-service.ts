import * as log from 'winston';
import parse = require('csv-parse');

import { KashCookie } from '../../imports/api';
import { ICurrency } from '../../imports/api';

/**
 * 
 * @export
 * @class CurrencyService
 */
export class CurrencyService {
  private readonly _currencies: Map<string, ICurrency> = 
  new Map<string, ICurrency>();

  public start(): void {
    log.info('Currency-Store starting...');
    const csv = Assets.getText('currencies.csv');
    debugger;
    const currencies = parse(csv, {columns: true, relax_column_count: true});
    for (const item of currencies) {
      const currency: ICurrency = item;
      if (this._currencies.has(currency.code)) {
        log.warn('Currency[%s] has already been inserted.', currency.code);
      }
      this._currencies.set(currency.code, currency);
    }
    Meteor.methods({
      dataCurrenciesRetrieveAll: (): ICurrency[] => {
        return Array.from<ICurrency>(this._currencies.values());
      },
      dataCurrenciesRetrieve: (code: string): ICurrency => {
        return this._currencies.get(code);
      }
    });
    log.info('Currency-Store started - %d currencies read.', this._currencies.size);
  }

  public stop(): void {
  }
}
