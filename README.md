# Mongo Proxy Store

A local Mongo store wrapped by a Proxy. By using a Proxy, you can store values in a local Mongo collection via object dot notation.

## Use

You can import store either as the default or the traditional Meteor destructured import.

You can get values from the store with destructuring (`const {groceries} = store;`) or with traditional dot notation (`store.count`).

You can set values in the store via dot notation (`store.count = 1`).

You can also get and set values up to 1 layer deep (`store.keys.shed`)

```
// GroceryList.container.js
import store from 'meteor/merlin:proxy-store';
// import {store} from 'meteor/merlin:proxy-store';
import {withTracker} from 'meteor/react-meteor-data';
import GroceryList from './GroceryList';

export default withTracker(() => {
  const {groceries} = store;

  return {
    count: store.count,
    groceries,
  };
})(GroceryList);

// addItem.js
import store from 'meteor/merlin:proxy-store';

const addItem = (item) => {
  store.count += 1;
  store.groceries = store.groceries.concat(item);
};
```
