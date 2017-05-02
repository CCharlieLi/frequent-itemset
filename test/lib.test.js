'use strict';

const chai = require('chai');
const should = chai.should();
const fi = require('../');

describe('Apriori', () => {
  it('Apriori should return frequent items set - include', () => {
    const result = fi(
      [
      	['769cc709-b83e-4366-b8df-17e18ecf4245',
      		'20db9d73-b28c-431e-ae76-605d36bf51c2','b41a4a6a-b752-46c4-bfb2-ca823abff5e8',
      		'bdbd0bab-3b21-4927-8fcf-c28379405885','a62b4c41-1f22-43bb-955c-fd45c19737b9'],
      	['df861750-85bc-4b79-a03d-2f8e8d24062f',
      		'9ddf2e89-1898-4f9b-bb12-ca3d3cf10f74','b5ca8e2d-142d-49d8-98ab-75691184622d',
      		'119f1252-e52b-484d-833c-b83742ec4ea0','b8150aeb-2708-4168-ba37-9554b84be619'],
      	['9ddf2e89-1898-4f9b-bb12-ca3d3cf10f74','b5ca8e2d-142d-49d8-98ab-75691184622d',
      		'119f1252-e52b-484d-833c-b83742ec4ea0']
      ],
      0.5
    );
    result.length.should.be.equal(1);
  });

  it('Apriori should return frequent items set - exclude', () => {
    const result = fi(
      [
        ['769cc709-b83e-4366-b8df-17e18ecf4245',
          '20db9d73-b28c-431e-ae76-605d36bf51c2','b41a4a6a-b752-46c4-bfb2-ca823abff5e8',
          'bdbd0bab-3b21-4927-8fcf-c28379405885','a62b4c41-1f22-43bb-955c-fd45c19737b9'],
        ['df861750-85bc-4b79-a03d-2f8e8d24062f',
          '9ddf2e89-1898-4f9b-bb12-ca3d3cf10f74','b5ca8e2d-142d-49d8-98ab-75691184622d',
          '119f1252-e52b-484d-833c-b83742ec4ea0','b8150aeb-2708-4168-ba37-9554b84be619'],
        ['9ddf2e89-1898-4f9b-bb12-ca3d3cf10f74','b5ca8e2d-142d-49d8-98ab-75691184622d',
          '119f1252-e52b-484d-833c-b83742ec4ea0']
      ],
      0.5,
      false
    );
    result.length.should.be.equal(1);
  });
});
