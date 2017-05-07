import * as log from 'winston';
import * as _ from 'lodash';
import * as Rx from 'rxjs';
import { Setup } from './setup';
import { MeteorHTTP } from './api';
import * as Services from './services';

const exchanges = new Services.ExchangeService();
const currencies = new Services.CurrencyService();
const spots = new Services.SpotService();

Meteor.startup(() => {
  log.debug('Attach debugger for server side debugger');

  // if (!Meteor.settings) {
  //   throw new Error('[--setting] must be specified.');
  // }
  // code to run on server at startup
  // Meteor.
  log.info("Kash-Cookie starting up...");
  startup();
  Setup.populateExchanges();
  log.info("Kash-Cookie is fully started.");
});

function startup() {
  // const mics = ['AA', 'BB', 'CC'];
  // const types = ['11', '22', '33'];
  // const all = Rx.Observable.from(mics)
  //   .flatMap(mic => Rx.Observable
  //   .from(types.map(type => ({ typeValue: type, micValue: mic }))));

  // const subcscription = all.subscribe(
  //   data => log.info('[' +  data.typeValue + ', ' + data.micValue + ']'),
  //   error => log.error(error),
  //   () => log.info('done!'));
  exchanges.start();
  currencies.start();
  spots.start();
}
