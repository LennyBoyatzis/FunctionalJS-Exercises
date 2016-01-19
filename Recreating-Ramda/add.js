'use strict'

import _curry2 from './_curry2';

/**
* Adds two numbers (curried)
* @category Math
* @param {Number} a
* @param {Number} b
* @return {Number}
* @example
*
* R.add(2,3); //=> 5
* R.add(7)(10); //=> 17
*
*/

const add = (a,b) => a + b;

export default _curry2(add);
