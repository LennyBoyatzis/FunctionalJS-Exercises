'use strict';
// Arrow functions and Array Comprehension

const arr = [1,2,3,4,5];

arr.filter(x => x % 2 === 0);

const sumOfSquares = (arr) =>
	arr.map( x => x*x )
		.reduce( (x, y) => (x + y));

console.log(sumOfSquares(arr));
