import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { exchanges } from 'both/api/collections';
import * as log from 'winston';
import * as fs from 'fs';

export class Setup {
  public static populateExchanges(): void {
    if (exchanges.collection.find().count() === 0) {
        log.info('Starts reading and caching exchanges...');
        const allExchanges = JSON.parse(Assets.getText('exchanges.json'));
        let count = 0;
        for (const exchange of allExchanges) {
          try {
            exchanges.collection.insert(exchange);
            ++count;
          } catch (error) {
            log.error(error);
          }
        }
        log.info('Completed reading and caching exchanges - ' + count + ' exchanges added.');
    }
  }
}
