// The JSON.parse API
//JSON.parse - method which parses a string as JSON

// it takes two parameters
// 1. The json string to be parsed
// 2. A reviver (generally a function which is used to instruct JSON.parse how to parse certain values)

var input = '[{"id":1,"title":"Gone with the Wind","publishDate":"1936-06-10T00:00:00.000Z","related":[80,3]},{"id":2,"title":"Freelancer","publishDate":"2015-08-11T00:00:00.000Z","related":[45,89]},{"id":3,"title":"A Christmas Carol","publishDate":"1843-12-19T00:00:00.000Z","related":[20,33]},{"id":4,"title":"The Cat in the Hat","publishDate":"1957-03-12T00:00:00.000Z","related":[50,10]}]'

// The reviver function accepts a key and a value and returns a value for the a key that you want to parse differently
var reviver = (key, value) => {
    // should handle the case for the empty string key
    if (key === '') return value
    if (key === 'publishDate') {
        return new Date(value)
    }
    return value
}

const resultWithOutReviver = JSON.parse(input)
const resultWithReviver = JSON.parse(input, reviver)

console.log('resultWithOutReviver -->', resultWithOutReviver)
console.log('resultWithReviver -->', resultWithReviver)
