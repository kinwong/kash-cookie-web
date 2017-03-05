require('angular2-meteor-polyfills'); // https://github.com/Urigo/angular2-meteor/issues/401
import { enableProdMode } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MeteorObservable } from 'meteor-rxjs';
import { AppModule } from './app/app.module';

Meteor.startup(() => {
  // enableProdMode();
    const subscription =
      MeteorObservable.autorun().subscribe(() => {
    if (Meteor.loggingIn()) {
      return;
    }
    platformBrowserDynamic().bootstrapModule(AppModule);
    // tslint:disable-next-line:no-console
    console.log('Meteor client bootstrapped and started.');
  });
});
