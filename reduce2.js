const reducer(accumulator, value, index, array) {
  let intermediaryValue = accumulator + value
  if (index === array.length - 1) {
    return intermediaryValue / array.length
  }

  return intermediaryValue
}

const DATA = [1,2,3,4,5,6,1]
const mean = DATA.reduce(reducer, 0)


const DATA = ["vote1", "vote2", "vote1", "vote2"]

const reducer = (accumulator, value) => {
  if (accumulator[value]) {
    accumulator[value] = accumulator[value] + 1;
  } else {
    accumulator[value] = 1;
  }
  // make sure you always return the accumulator within the reduce
  return accumulator;
}

// What out for this kind of bug!!!! Make sure you always pass in an initial value otherwise it defaults to the first item in the array
const tally = DATA.reduce(reducer, {})
