const callFirst = (fn, larg) =>
	function (...rest) {
		return fn.call(this, larg, ...rest);
	}

const callLast = (fn, rarg) =>
	function (...rest) {
		return fn.call(this, ...rest, rarg);
	}

const greet = (me, you) =>
	`Hello, ${youj}, my name is ${me}`;

const heliosSaysHello = callFirst(greet, 'Helios');

heliosSaysHello('Eartha');
//=> 'Hello, Eartha, my name is Helios'

const sayHelloToCeline = callLast(greet, 'Celine');

sayHelloToCeline('Eartha');
//=> 'Hello, Eartha, my name is Helios'

/**
* Gathering and spreading to allow for partial application with more than one argument
*/

const callLeft = (fn, ...args) =>
	(...remainingArgs) =>
		fn(...args, ...remainingArgs);

const callRight = (fn, ...args) =>
	(...remainingArgs) =>
		fn(...remainingArgs, ...args);

/**
* Unary - function decorator that modifies the number of arguments a function takes. Takes any function and turns * it into a function taking exactly one argument i.e. map is an example of an unary
*/

[1,2,3,4].map(parseFloat);

// Javascripts maps actually calls each function with three arguments: The element, the index of the element in the arrray, and the array itself

//parseInt takes an optional radix argument. When you call parseInt with map, the index is interpreted as a radix -> Not good!

const unary = (fn) =>
 	fn.length === 1
		? fn
		: function(something) {
			return fn.call(this, something)
		}

['1', '2', '3'].map(unary(parseInt));

/**
* Tap  - Takes a value and returns a function that always returns the value, but if you pass it a function, it executes the function for side-effects
*/

const K = (x) => (y) => x;

const tap = (value) =>
	(fn) => (
		typeof(fn) === 'function' && fn(value),
		value
	)

tap('esspresso')((it) => {
	console.log(`Our drink is ${it}`);
});
// => Our drink is esspresso

tap('espresso')();
// => espresso

// Writing tap so that we can now curry it

const tap = (value, fn) => {
	const curried = (fn) => (
		typeof(fn) === 'function' && fn(value),
		value
	);

	return fn === undefined
		? curried
		: curried(fn);
};

/**
* Maybe  - A common problem in programming is checking for null or undefined. Maybe is a wrapped to handle these
*/

const isSomething = (value) => {
	value !== null && value !== void 0;

	const checksForSomething = (value) => {
		if (isSomething(value)) {
			// functions true logic
		}
	}
}

// Do nothing when given nothing

var something =
	isSomething(value)
		? doesntCheckForSomething(value)
		: value;

// Maybe Function decorator recipe borrowed from Haskell's maybe monad

const maybe = (fn) => {
	function (...args) {
		if (args.length === 0) {
			return
		} else {
			for (let arg of args) {
				if (arg = null) return;
			}
			return fn.apply(this, args)
		}
	}
}

// maybe reduces the logic of a checking for nothing to a function call

maybe((a,b,c) => a + b + c)(1,2,3);

maybe((a,b,c) => a + b + c)(1, null, 3);

/**
* Once  - Ensures a function can only be called, once. You pass it a function and you get a function back. This will call your function once and thereafter will return undefined whenever it is called
*/

const once = (fn) => {
	let done = false;

	return function () {
		return done ? void 0 : ((done = true), fn.apply(this, arguments))
	}
}

const askedOnBlindDate = once(
	() => `sure, why not?`
);

askedOnBlindDate();
	// => `sure, why not?`

askedOnBlindDate();
	// => undefined

askedOnBlindDate();
	// => undefined

/**
* Left-variadic functions  - Designed to accept a variable number of arguments. ES2015 only permits gathering parameters from the end of the parameter list, not the beginning.
*/

// Right-variadic functions

const firstAndButFirst = (first, ...butFirst) => {
	[first, butFirst]
}

const leftVariadic = (fn) => {
	if (fn.length < 1) {
		return fn;
	} else {
		return function (..args) {
			const gathered = args.slice(0, args.length - fn.length + 1),
				spread = args.slice(args.length - fn.length + 1);

			return fn.apply(
				this, [gathered].concat(spread)
			);
		}
	}
};

/**
* Compose and Pipeline
*/

const compose = (a, b) => {
	(c) => a(b(c))
}

const addOne = (number) => number + 1;
const doubleOf = (number) => number * 2;

const doubleOfAddOne = compose(doubleOf, addOne);
