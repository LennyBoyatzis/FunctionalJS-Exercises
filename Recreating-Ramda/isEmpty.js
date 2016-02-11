const _curry1 = require('./internal/_curry1')
const empty = require('./empty')
const equals = require('./equals')

/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */

 const isEmpty = _curry1((x) => {
     x != null && equals(x, empty(x))
})

module.exports = isEmpty
