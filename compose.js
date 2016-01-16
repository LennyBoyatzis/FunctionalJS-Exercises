/**
* Compose
*/

const compose = (a,b) => (c) => (a(b(c)))

const addOne = (number) => number + 1;
const doubleOf = (number) => number * 2;

const doubleOfAddOne = (number) => doubleOf(addOne(number));

const doubleOfAddOne = compose(doubleOf, addOne);

/**
* Compose Implementation
* @param ...fns - functions to be composed
@return returns the value from the composed functions
*/

const compose = (...fns) => (value) => fns.reverse().reduce((acc, fn) => fn(acc), value);

const setter = compose(fluent, maybe);

SomeClass.prototype.setUser = setter(function(user) {
    this.user = user;
});

SomeClass.prototype.setPrivileges = setter(function (privileges) {
    this.privileges = privileges;
})
