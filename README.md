# Frequent Itemset

[![Build Status](https://travis-ci.org/CCharlieLi/frequent-itemset.svg?branch=master)](https://travis-ci.org/CCharlieLi/frequent-itemset)

Give a array of item sets and a minimum support, return you back a array of maximum frequent itemset.

This lib is implemented in [Apriori algorithm](https://en.wikipedia.org/wiki/Apriori_algorithm). 

### Install

```
npm i frequent-itemset
```

### Usage

- Parameters
    - Array of itemsets
    - Support number
    - Include/Exclude support number 

```
const fi = require('frequent-itemset');
console.log(fi(
  [
    ['4', '5', '3'],
    ['1', '2', '3'],
    ['4', '6', '3'],
    ['4', '5', '3', '1', '2']
  ],
  0.5,
  true
));

// [ [ '4', '5', '3' ], [ '3', '1', '2' ] ]

```

### License

MIT
