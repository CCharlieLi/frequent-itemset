'use strict';

const chai = require('chai');
const should = chai.should();
const fi = require('../');

describe('Apriori', () => {
  it('Apriori should return frequent items set', () => {
    const result = fi(
      [['4', '5', '3'], ['1', '2', '3'], ['4', '6', '3'],
      ['4', '5', '3', '1', '2']],
      0.5
    );
    result.length.should.be.equal(2);
  });
});
