import _curry1 from './internal/_curry1';
import sum from './sum';


/**
 * Returns the mean of the given list of numbers.
 *
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */

 const mean = _curry1((list) => {
     return sum(list) / list.length;
 });
