// The concept of Either
// Can perform functional error handling and null checks

const Right = x =>
({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x}))`,
})

const Left = x =>
({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x}))`,
})

const result = Left(3)
  .map(x => x + 1)
  .map(x => x / 2)
  .fold(x => 'error', x => x)

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const findColor = name =>
  fromNullable(({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'})[name])

const result = findColor('green')
  .map(c => c.slice(1))
  .fold(e => 'no color',
        c => c.toUpperCase())
