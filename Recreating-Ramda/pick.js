import _curry2 from './internal/_curry2';

/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */

 const pick = _curry2((names, obj) => {
     let result = {};
     let idx = 0;
     while (idx < names.length) {
         if (names[idx] in obj) {
             result[names[idx]] = obj[names[idx]];
         }
         idx += 1;
     }
     return results;
 });

 module.exports = pick;
