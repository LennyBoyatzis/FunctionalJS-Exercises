const LANGUAGE_ARRAY = [
  'Javascript',
  'Javascript',
  'Javascript',
  'Cplusplus',
  'Objectivec',
  'C',
  'Python',
  'Objectivec',
  'C',
  'C',
  'Cplusplus',
  'Objectivec',
  'Javascript',
  'Javascript',
  'Javascript',
]

const LANGUAGE_OBJ = LANGUAGE_ARRAY.reduce((accumulator, currentVal, index, array) => {
  console.log("accumulator", accumulator.hasOwnProperty(currentVal))
  if (accumulator.hasOwnProperty(currentVal)) {
    accumulator[currentVal] = accumulator[currentVal] + 1
  } else {
    accumulator[currentVal] = 1
  }
  return accumulator
}, {})

console.log("LANGUAGE_OBJ", LANGUAGE_OBJ)

// Array Transformations (Reduce)

const DATA = [1,2,3]
const doubled = DATA.reduce((acc, value) => {
  acc.push(value * 2)
  return acc
}, [])

console.log("Doubled", doubled)

// Array Transformations (Map)
