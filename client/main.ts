import 'zone.js';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { Meteor } from 'meteor/meteor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';
 
Meteor.startup(() => {
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(AppModule);
  console.log('Meteor client bootstrapped and started.');
});
