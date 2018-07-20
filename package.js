Package.describe({
  name: 'merlin:proxy-store',
  version: '0.9.0',
  // Brief, one-line summary of the package.
  summary: 'A local Mongo store wrapped by a Proxy',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:merlinpatt/meteor-proxy-store',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('mongo');
  api.mainModule('meteor-proxy-store.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('mongo');
  api.use('tinytest');
  api.use('meteor-proxy-store');
  api.mainModule('meteor-proxy-store-tests.js');
});
