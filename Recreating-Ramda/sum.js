'use strict';
import add from './add';
import reduce from './reduce';

/**
* Adds together all the elements of a list
*
* @param {Array} list An array of numbers
* @return {Number} The sum of all the numbers in the list
* @example
*
* R.sum([2,4,6,8,100,1]); //=> 121
*
*/
module.exports = reduce(add, 0);
