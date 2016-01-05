'use strict';

const _ = require('ramda');

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

// let words = (str) => {
// 	return _.split(' ', str);
// };

const words = _.split(' ');

console.log(words("Hello World"));

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

const sentences = _.map(words);

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

// var filterQs = function(xs) {
// 	return _.filter(function(x) {
// 		return match(/g/i, x);
// 	}, xs);
// };

const filterQs = _.filter(_.match(/q/i));

console.log(filterQs('Penguin'));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

// LEAVE BE:
var _keepHighest = (x,y) => x >= y ? x : y;

// REFACTOR THIS ONE:
var max = function(xs) {
	return _.reduce(function(acc, x){
		return _keepHighest(acc, x);
	}, -Infinity, xs);
};

var max = _.reduce(_keepHighest, -Infinity);

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)

module.exports = {
	words: words,
	sentences: sentences,
	filterQs: filterQs,
	max: max,
	slice: slice,
	take: take
};
