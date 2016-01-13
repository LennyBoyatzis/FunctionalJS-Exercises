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
