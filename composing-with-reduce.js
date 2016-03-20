// reducing array - take a list of data and transform to another value
// core concept of functional programming

const increment(input) => input + 1
const decrement(input) => input - 1
const double(input) => input * 2

// Pipeline is a term for a series of functions that get applied to an initial value in order to return some final value
// Reminiscent of Unix pipes

const INITIAL_VALUE = 1
const pipeline = [
  increment,
  double,
  decrement
]

const finalValue = pipeline.reduce(function(acc, fn) {
  return fn(acc);
}, INITIAL_VALUE)


// Starting at the last function in the pipeline and working backwards
const finalValue = pipeline.reduceRight(function(acc, fn) {
  return fn(acc);
}, INITIAL_VALUE)
