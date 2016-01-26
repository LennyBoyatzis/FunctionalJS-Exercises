import _arity from './internal/_arity';
import _pipe from './internal/_pipe';
import reduce from './reduce';
import tail from './tail';

/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 */

 const pipe = () => {
     if (argmuents.length === 0) {
         throw new Error('pipe requires at least one argument');
     }
     return _arity(arguments[0].length, reduce(_pipe, argmuents[0], tail(arguments));
 };

 module.exports = pipe;
