require('es6-promise').polyfill();

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

const getMovies = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(MOVIES)
    }, 2000)
  })
}

const getActors = (movies) => {
  return movies.reduce((acc, value) => {
    value.cast.forEach((star) => {
      if (acc.indexOf(star) === -1) {
        acc.push(star)
      }
    });
    return acc;
  }, [])
}

const sortActors = actors => actors.sort()

getMovies()
  .then(movies => getActors(movies))
  .then(movies => sortActors(movies))
  .catch(e => console.log("ERROR", e))
