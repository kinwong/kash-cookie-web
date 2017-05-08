import * as log from 'winston';
import parse = require('csv-parse');
import { ICountry } from '../../imports/api';

/**
 * 
 * @export
 * @class CountryService
 */
export class CountryService {
  private readonly _countries: Map<string, ICountry> =
  new Map<string, ICountry>();

  public async start(): Promise<void> {
    return new Promise<void>((resolver, reject) => {
      log.info('Country-Store starting...');
      // Exposes methods.
      Meteor.methods({
        dataCountriesRetrieveAll: (): ICountry[] => {
          return Array.from<ICountry>(this._countries.values());
        },
        dataCountriesRetrieve: (code: string): ICountry => {
          return this._countries.get(code);
        }
      });

      const csv = Assets.getText('countries.csv');
      parse(csv, { columns: true, comment: '#' }, (error, currencies: ICountry[]) => {
        for (const item of currencies) {
          const country: ICountry = item;
          if (this._countries.has(country.code)) {
            log.warn('Country[%s] has already been inserted.', country.code);
          }
          this._countries.set(country.code, country);
        }
        log.info('Country-Store started - %d countries read.', this._countries.size);
        resolver();
      });
    });
  }

  public stop(): void {
  }
}
