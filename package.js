Package.describe({
  name: 'merlin:proxy-store',
  version: '0.9.0',
  summary: 'A local Mongo store wrapped by a Proxy',
  git: 'https://github.com/merlinpatt/meteor-proxy-store',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use('ecmascript');
  api.use('mongo');
  api.mainModule('store.js', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('mongo');
  api.use('tinytest');
  api.use('merlin:proxy-store');
  api.mainModule('store.tests.js');
});
