import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MongoObservable } from 'meteor-rxjs';

import { Activity } from './activity';
import { IUserDetails } from './user-details';

export const activities = new MongoObservable.Collection<Activity>('kc-activities');
export const users = new MongoObservable.Collection(Meteor.users);
export const exchanges = new MongoObservable.Collection('exchanges');

