import * as winston from 'winston';
import * as lodash from 'lodash';

Meteor.startup(() => {
  // code to run on server at startup
  // Meteor.
  winston.info("Meteor startup");
});
