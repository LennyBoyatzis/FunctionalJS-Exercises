// Patterns for reduction that aren't obvious

// Flattening an array with reduce
const DATA = [[1,2,3], [4,5,6], [7,8,9]]

const flattenedData = DATA.reduce((acc, value) => {
  return acc.concat(value)
}, [])

// Flatmap

const MOVIES = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];

// returns all the stars from the above movies, no duplicates
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// This method returns -1 if the value to search for never occurs.

const stars = MOVIES.reduce(function(acc, value) {
  value.cast.forEach(function(star) {
    if (acc.indexOf(star) === -1) {
      acc.push(star);
    }
  });

  return acc;
}, []);
