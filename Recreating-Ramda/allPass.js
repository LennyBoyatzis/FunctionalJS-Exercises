const _curry1 = require('./internal/_curry1');
const _curryN = require('./_curryN');
const max = require('./max');
const pluck = require('./pluck');
const reduce = require('./reduce');

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 * @param {Array} preds
 * @return {Function}
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */

const allPass = _curry1((preds) => {
    return curryN(reduce(max, 0, pluck('length', preds)), function() {
        let idx = 0;
        let len = preds.length;
        while (idx < len) {
            if (!preds[idx].apply(this, arguments)) {
                return false;
            }
            idx += 1;
        }
        return true;
    });
});

// [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
//   return previousValue + currentValue;
// });
// 
// const numbers = [1,2,3,4,5];
// const add = (a,b) => a + b;
//
// console.log(R.reduce(add, 10, numbers));
//
// const obj = [{a: 1}, {a: 2}];
// const arr = [[1, 2], [3, 4]];
//
// console.log(R.pluck('a')(obj));
// console.log(R.pluck(1)(arr))
//
