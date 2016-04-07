// variable declarations are hoisted to the top
// variables are hoisted to the top of their current scope
// only the declaration is hoisted ---> Not the assigned value!!!!
console.log("Running script");


(function helloPerson() {
    console.log(`Hello ${person}`)
    var person = 'Lenny';
})()

// example of variable declarations getting hoisted to the top of their scope

(function() {
  var a, b, c; // variables declared
  a = 'a';
  // lines of code
  b = 'b'; // initialized
  // more lines of code
  c= 'c'; // initialized
  // final lines of scripting
})();

// another example
(function() {
  var foo = 1;
  alert(foo + " " + bar + " " + baz);
  var bar = 2;
  var baz = 3;
})();
// in the example below you would probably expect an exception to be thrown
// due to javascripts hoisting of variable declarations this can be thought of as
(function() {
  var foo = 1, bar, baz // bar and baz being declared yet not INITIALISED!
  alert(foo + " " + bar + " " + baz);
  var bar = 2;
  var baz = 3;
})();

//Function hoisting (function declarations)

foo()

function foo() {
    console.log("foo")
}

// In the example above foo would be hoisted and therefore the invocation of foo above the declaration is all good

//NOTE: Functions that are assigned to variables are not hoisted. The following will not work

foo();

var foo = function() {
    alert('Hello!')
}
