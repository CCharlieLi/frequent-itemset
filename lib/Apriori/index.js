'use strict';

const path = require('path');
const _ = require('lodash');
const G = require('generatorics');
const isInclude = require(path.resolve( __dirname, './include'));

module.exports = (arrs, minSupport = 0.5, include = true) => {
  const originalArrs = arrs;
  const originalArrsLength = arrs.length;

  let Items = _.union(...arrs).map(each => [each]);
  let prevItems = [];
  let k = 1;
  let flag = true;

  let failedItemsMap = new Map();
  let succeedItemsMap = new Map();

  const supportCal = (L) => {
    L.forEach(each => {
      let scount = 0;
      originalArrs.forEach(superSet => {
        if (_.difference(each, superSet).length === 0) scount++;
      });
      if (include) {
        if (scount / originalArrsLength < minSupport) failedItemsMap.set(each, scount);
        else succeedItemsMap.set(each, scount);
      } else {
        if (scount / originalArrsLength <= minSupport) failedItemsMap.set(each, scount);
        else succeedItemsMap.set(each, scount);
      }
    });

    k++;

    let reunion = _.union(...Array.from(succeedItemsMap.keys()));
    let combs = G.clone.combination(reunion, k);

    Items = [...combs];

    Items = Items.filter(each =>
      !isInclude(each, Array.from(failedItemsMap.keys())));

    if (Items.length === 0) {
      flag = false;
      prevItems = Array.from(succeedItemsMap.keys());
    }

    succeedItemsMap.clear();
  };

  while (true) {
    if (!flag) break;
    supportCal(Items);
  }

  return prevItems;
};

