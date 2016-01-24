import _curry2 from './internal/_curry2';

/**
* Returns `true` if both arguments are `true`; `false` otherwise
* @param {Boolean} a A boolean value
* @param {Boolean} b A boolean value
* @return {Boolean} `true` if both arguments are `true`, `false` otherwise
* @example
*
* R.and(true, true); //=> true
*      R.and(true, false); //=> false
*      R.and(false, true); //=> false
*      R.and(false, false); //=> false
*/

const and = _curry2((a, b) => {
    a && b;
})

module.exports = and;
