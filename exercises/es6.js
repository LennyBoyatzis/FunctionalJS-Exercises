'use strict';

// 1. Assignment Destructuring
var { foo } = pony
var foo = pony.foo

var {foo: baz} = pony
var baz = pony.foo

[a, b] = [0, 1] //=> a: 0 and b: 1
[a, ,b] = [0, 1, 2] // => a: 0 and b:2

[a, b] = [b, a] // => swaps variables

// You can use destructuring in variable parameters

(bar = 2) => {}

// 2. Spread Operator and Rest parameters

function foo (...everything) {} // => everything is an array with all parameters passed to foo
function foo (bar, ...rest) {} // => ...rest must be the last parameter in the list

fn(...[1,2,3]) // => same as fn(1,2,3)

// 3. Arrow functions

// Terse way to declare a function like param => returnValue
[1, 2].map(x => x * 2);

// To return an object implicitly, wrap it in parenthesis
() => ({foo: 'bar'})

// When using a code block there's no implicit return
() => { return 'foo' }

// Arrow functions are bound to their lexical scope -> this is the same this context as in the parent scope
// -> this can't be modified with .call, .apply or similar reflection type methods
