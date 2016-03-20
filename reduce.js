const VOTES = [
  "angular",
  "angular",
  "react",
  "react",
  "react",
  "angular",
  "ember",
  "react",
  "vanilla"
]

const initialValue = {};

const reducer = (tally, vote) => {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }

  return tally;
}

const result = VOTES.reduce(reducer, initialValue)
