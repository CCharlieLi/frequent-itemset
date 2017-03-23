'use strict';

const _ = require('lodash');

module.exports = (superArr, subArrSet) => {
  return subArrSet.filter(each => {
    if (_.difference(each, superArr).length === 0) {
      return true;
    }
  }).length > 0 ? true : false;
};

