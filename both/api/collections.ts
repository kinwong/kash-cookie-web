import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { MongoObservable } from 'meteor-rxjs';

import { Activity } from './activity';
import { UserDetails } from './user-details';

export const activities = new MongoObservable.Collection<Activity>('kc-activities');
export const users = new MongoObservable.Collection<User>(Meteor.users);
