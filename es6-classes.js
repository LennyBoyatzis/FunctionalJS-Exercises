// es6 classes
// -----------

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x,y,color) {
        super(x,y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString();

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true

// Note: a class definition is a function
// You cannot invoke a class definition via a function call
// need to use 'new'
// class declarations are not hoisted whereas function declarations are hoisted

// There are two ways to define a class
// 1. Class declarations
// 2. Class expressions

// Inside the body of a class definition
// A class body can only contain methods, but not data properties
// There a 3 kinds of methods that you often find in class literals
// 1. constructor
// 2. static methods
// 3. prototype methods

class Foo {
    constructor(prop) {
        this.prop = prop
    }

    static staticMethod() {
        return 'classy';
    }

    prototypeMethod() {
        return 'prototypical';
    }
}

let foo = new Foo(123);

// within the constructor function we can call the super-constructor via super()
// Static methods are properties of Foo itself
// Prototype properties - properties of Foo.prototype (inherited by instances of foo)
// In a derived class, you must call super() before you can use this:
