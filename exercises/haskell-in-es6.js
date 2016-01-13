// Functional Composition

/**
* Function Composition
* @param ...fs functions to compose
* @return composed functions
*/

export function comp (...fs) {
	return (v, ...args) =>
		fs.reduceRight(
			(g,f) => f(g, ..args), v
		);
}

// Examples

const add = x => x + x;
const pow = x => x * x;
const inv = x => 1 / x;

const comp = f.comp(add, pow, inv);

// f.flip

// flip f takes its (first) two arguments in the reverse order of f.

// flip :: (a -> b -> c) -> b -> a -> c

/**
* Flip function arguments
* @param f function to flip
* @return f applied with args in reverse order
**/

export function flip (f) {
	return (a, b, ...args) => {
		f(b, a, ...args);
	}
}

// Examples

const add = (a,b) => a / b;
const three = (a, b, c) => [a, b, c]
const flip = f.flip(add)

flip(10, 5); // => 1/2

// f.until

// until p f yields the result of applying f until p holds

/**
* Applies a function which is passed as the second argument to
* the third argument and it compares the result with the condition,
* if the condition evaluates to true, it prints the result, if not,
* it passes the result to the function and repeats the cycle as long
* as the condition is match
* @param condition condition to be applied to f
* @param f funciton to match against
* @return result if condition is true else repeat cycle
**/

export function until (condition, f) {
	return (...args) => {
		var r = f(...args);
		return condition(r) ? r : until(condition, f)(r);
	}
}

// Examples

const condition = x => x > 100;
const inc = x => x + 1;
const until = f.until(condition, inc);

until(0); //=> 101
