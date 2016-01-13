'use strict';

const R = require('ramda');

const add10 = R.add(10);
console.log(add10(2)); // => 12

const x2 = R.multiply(2);
const plus10 = R.add(10);
const x2plus10 = R.pipe(x2, plus10);
console.log(x2plus10(4));
