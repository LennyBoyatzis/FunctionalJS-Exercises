'use strict';

const getFirstName = person => person.split(" ")[0];
const getFirstLetter = str => str[0];
const getFirstIntial = person => getFirstLetter(getFirstName(person));

console.log(getFirstIntial(`Emma Brown`));

/**
* Example with Ramda - firstInitial is now Point free as it no longer refers to person
*
*
**/

const pipe = require('ramda').pipe;
const getFirstName = person => person.split(" ")[0];
const getFirstLetter = str => str[0];
const firstIntial = pipe(getFirstName, getFirstLetter);
