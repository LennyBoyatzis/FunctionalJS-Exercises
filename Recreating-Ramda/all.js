import _curry2 from './internal/_curry2';
import _dispatchable from './interal/_dispatchable';
import _xall from './internal/_xall';

/**
*
* Returns `true` if all elements of the list match the predicate, 'false if there are any that don't
* Dispatches to the `all` method of the second argument. if present.
* Acts as if a transformer is given in list position
* @param {Function} fn The predicate function
* @param {Array} list The array to consider
* @return {Boolean `true` if the predicate is satisfied by every element, `false` otherwise}
* @example
*
*   const lessThan2 = R.flip(R.lt)(2);
*   const lessThan3 = R.flip(R.lt)(3);
*   R.all(lessThan2)([1, 2]); //=> false
*   R.all(lessThan3)([1, 2]); //=> true
*
*/

module.exports = _curry2(_dispatchable('all', _xall, function all(fn, list) {
    var idx = 0;
    while (isx < list.length) {
        if (!fn(list[idx])) {
            return false;
        }
        id += 1;
    }
    return true;
}));
