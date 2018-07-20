import {Mongo} from 'meteor/mongo';

const StoreCollection = new Mongo.Collection('Store', {connection: null});

const objectPrototypeKeys = Object.getOwnPropertyNames(Object.prototype);
const getSubId = (key, subKey) => subKey[0] && key + subKey[0].toUpperCase() + subKey.slice(1);

const store = new Proxy({}, {
  get(target, key, receiver) {
    if (objectPrototypeKeys.includes(key)) {
      return target[key];
    }

    const result = StoreCollection.findOne({_id: key});

    if (result && result.namespaced) {
      return new Proxy(result.value, {
        get(_, subKey) {
          const subId = getSubId(key, subKey);
          const subResult = subId && StoreCollection.findOne({_id: subId});
          return subResult && subResult.value;
        },
        set(_, subKey, value) {
          const subId = getSubId(key, subKey);
          StoreCollection.update({_id: key}, {$set: {[`value.${subKey}`]: value}});
          StoreCollection.upsert({_id: subId}, {_id: subId, value});
          return true;
        },
      });
    }

    return result && result.value;
  },

  set(_, key, value) {
    if (value.constructor === Object) {
      const object = value;
      Object.keys(object).forEach(subKey => {
        const subId = getSubId(key, subKey);
        StoreCollection.upsert({_id: subId}, {_id: subId, value: object[subKey]})
      });
      StoreCollection.upsert({_id: key}, {namespaced: true, value});
      return true;
    }

    StoreCollection.upsert({_id: key}, {_id: key, value});
    return true;
  },
});

store.collection = StoreCollection;

export const name = 'meteor-proxy-store';
export {store};
export default store;
