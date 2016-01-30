import _curry2 from './internal/_curry2';
import map from './map';
import prop from './prop';


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} list The array to consider.
 * @return {Array} The list of values for the given key.
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 */

 const pluck = (p, list) => map(prop(p), list);
 module.exports = pluck;
