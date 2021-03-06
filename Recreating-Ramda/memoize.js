import _arity from './internal/_arity';
import _curry1 from './internal/_curry1';
import _has from './internal/_has';
import toString from './toString';

/**
* Creates a new fn that, when invoked, caches the result of calling fn for
* a given argument set and returns the result. Subsequent calls to the memoized fn
* with the same argument set will not result in an additional
* call to fn; instead, the cached result for that set of arguments will be
* returned
*
* @param {Function} fn The function to memoize
* @return {Function} Memoized version of fn
* @example
*
* let count = 0;
* const factorial = R.memoize(n => {
*   count += 1;
*   return R.product(R.range(1, n + 1));
* });
* factorial(5); //=> 120
* factorial(5); //=> 120
* factorial(5); //=> 120
* count; //=> 1;
*/

const memoize = _curry1((fn) => {
    let cache = {};
    return _arity(fn.length, () => {
        let key = toString(arguments);
        if (!_has(key, cache)) {
            cache[key] = fn.apply(this, arguments);
        }
        return cache[key];
    })
})
