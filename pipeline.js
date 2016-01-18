/**
* Pipeline
* Pipeline says add one to the number then double it
* Compose says double the number then add one
*/

const pipeline = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);

const setter = pipeline(addOne, double);
