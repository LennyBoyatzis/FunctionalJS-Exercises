// Function composition

const add1 = (a) => a + 1
const times2 = (a) => a * 2
const compose = (a, b) => (c) => a(b(c))
const add10fTimes2 = compose(add1, times2)
add10fTimes2(5)

const pipe = (fns) => (x) => fns.reduce((v, f) => f(v), x)
const times2add1 = pipe([time2, add1])
times2add1(5)
