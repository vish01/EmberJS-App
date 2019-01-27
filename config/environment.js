'use strict';

module.exports = function(environment) {
  let ENV = {
      modulePrefix: 'ember-js-app',
      environment: environment,
      rootURL: "/",
      locationType: "auto",
  
      firebase: {
        apiKey: "AIzaSyDgnnDEDAFdi7dKtu9y4IhlR2FMd9hyFYo",
        authDomain: "myapp-1523725346458.firebaseapp.com",
        databaseURL: "https://myapp-1523725346458.firebaseio.com",
        projectId: "myapp-1523725346458",
        storageBucket: "myapp-1523725346458.appspot.comm",
        messagingSenderId: "428963497844"
      },
  
      // if using ember-cli-content-security-policy
      contentSecurityPolicy: {
        'script-src': "'self' 'unsafe-eval' apis.google.com",
        'frame-src': "'self' https://*.firebaseapp.com",
        'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
      },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
