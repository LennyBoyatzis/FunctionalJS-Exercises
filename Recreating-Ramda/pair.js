const _curry2 = require('./internal/_curry2');


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */

 const pair = _curry2((fst, snd) => [fst, snd]);
