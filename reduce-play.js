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

const NEW_ARRAY = DATA.map((val) => {
  return val * 2
})

// Array Transformations (Reduce)

const DATA_2 = [1,2,3,4,5,6,7,8]

const EVEN_ARRAY = DATA_2.reduce((acc, value) => {
  if (value % 2 === 0) {
    acc.push(value)
  }
  return acc
}, [])

console.log("EVEN_ARRAY", EVEN_ARRAY)

// Array Transformations (Filter)

const EVEN_ARRAY_FILTERED = DATA_2.filter((val) => {
  if (val % 2 === 0) return val
})

console.log('EVEN_ARRAY_FILTERED', EVEN_ARRAY_FILTERED)

// Advanced reduce (3rd and 4th parameters)

const reducer = (accumulator, value, index, array) => {
  if (index !== array.length - 1) {
    return accumulator + value
  }
  return accumulator/array.length
}

const SUM = DATA_2.reduce(reducer, 0)
