// Object oriented approach tends to break problems into groupings of "nouns", or objects, a functional approach breaks the same problem into groupings
// With functional programming, larger functions are formed by gluing or composing other functions together to build high-level behaviours

// In a system observing a strict OO style, the interactions between objects cause internal change to each object, leading to an overall system state that is the amalgamation of many smaller, potentially subtle state changes
// The interrelated state changes form a conceptual "web of change" that, at times, can be confusing to keep in your head. This confusion becomes a problem when the act of adding new objects and system features requires a working knowledge of the subtleties of
// potentially far-reaching state changes

// A functional system on the other hand strives to minimise the observable state modification. Therefore, adding new features to a system built using functional principles is a matter of understanding how new functions can operate within the context of localised
// nondestructive data transformations.

// Javascript supports both models - meaning that systems can and should be composed of both OOP and functional programming.

// Analogy for functional principles is an assembly-line device that takes raw materials in one end and gradually builds a product that comes out the other end
// FP is not about eliminating state changes, but instead about reducing the occurrences of mutation to the smallest area possible for any given system

'use strict';

const fail = (thing) => throw new Error(thing);
const warn = (thing) => console.log([`Warning:`, thing].join(' '));
const note = (thing) => console.log([`Note:`, thing].join(' '));

function parseAge(age) {
    if (!_.isString(age)) fail(`Expecting a string`);
    let a;

    note(`Attempting to parse an age`);
    a = parseInt(age, 10);

    if (_.isNaN(a)) {
        warn(["Could not parse age:", age].join(' '));
        a = 0;
    }

    return a;
}
