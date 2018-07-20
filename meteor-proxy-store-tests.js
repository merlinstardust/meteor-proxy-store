// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-proxy-store.js.
import { name as packageName } from "meteor/meteor-proxy-store";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-proxy-store - example', function (test) {
  test.equal(packageName, "meteor-proxy-store");
});
