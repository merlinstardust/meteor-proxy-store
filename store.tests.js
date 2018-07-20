import {Tinytest} from 'meteor/tinytest';
import {name as packageName} from 'meteor/merlin:proxy-store';

Tinytest.add('meteor-proxy-store - example', function (test) {
  test.equal(packageName, 'merlin:proxy-store');
});
