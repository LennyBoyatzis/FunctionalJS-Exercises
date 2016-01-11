'use strict';

const f = require(f);
const vectorious = require('vectorious');

const range = (m, n) => vectorious.Vector.range(m, n).toArray();

let ans;

// Qu: Find the sum of all the multiples of 3 or 5 below 1000

const add = (a, b) => a + b;
const multiple = (x) => (x % 5 === 0 || x % 3 === 0);

ans = range(0, 1000)
	.filter(multiple)
	.reduce(add);

console.log(`Multiples of 3 & 5 ${ans}`);

// Qu: By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

const even = (x) => x % 2 === 0;
const fib = [1,2];
while (f.last(fib) < 4000000)
	fib = f.concat([1,2], f.zipWith(add, fib, f.tail(fib)));

ans = fib
	.filter(even)
	.reduce(add);

console.log(`Even fibonacci numbers ${ans}`);

// Qu: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20

const product = (a, b) => a * b;
const productReduce = (xs) => xs.reduce(product);
const homogeneous = (xs) => f.head(xs) === f.last(xs);

// if array contains duplicates with differing lengths

const duplicates = (xs, _, self) =>
	self.filter(
		(ys) =>
			f.head(xs) === f.head(ys) &&
			xs.length < ys.length
		).length ? true: false;
	)

ans = range(2, 20)
	.map(factors)
	.filter(homogeneous)
	.filter(duplicates)
	.map(productReduce)
	.reduce(product)
