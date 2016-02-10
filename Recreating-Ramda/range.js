const _curry2 = require('./internal/_curry2')
const _isNumber = require('./internal/_isNumber')

/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */

 const range = _curry2((from, to) => {
    if(!(_isNumber(from) && _isNumber(to))) {
        throw new TypeError('Both args must be numbers')
    }
    let result = []
    let n = from
    while (n < to) {
        result.push(n)
        n += 1
    }
    return result
 }))
