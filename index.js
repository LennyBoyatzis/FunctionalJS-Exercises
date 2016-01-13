'use strict';
const R = require('ramda');

const Maybe = val => ({
  val,
  fmap(f) {
    if(this.val === null || this.val === undefined) return Maybe(null);
    return Maybe(f(this.val));
  }
});

const getFirstName = maybeName => maybeName.fmap(name => name.split(" ")[1]);
const getFirstLetter = maybeString => maybeString.fmap(string => string[0]);

const firstInitial = R.pipe(getFirstName, getFirstLetter);

// let's try this out
const user = Maybe("Bully Biff Tannen");
const initial = firstInitial(user);
console.log(initial);

const noUser = Maybe(null);
const noInitial = firstInitial(noUser);
console.log(noInitial);

console.log(((x) => (y) => x * y)(3)(4));

console.log((diameter, PI)Z => diameter * PI)(3.14159)(2));
