const getPrefs = user => {
  if (user.premium) {
    return loadPrefs(user.preferences)
  } else {
    return defaultPrefs
  }
}

// VS

const getPrefs = user =>
  (user.premium ? Right(user) : Left('not premium'))
  .map(u => u.preferences)
  .fold(() => defaultPrefs, prefs => loadPrefs(prefs))


const streetName = user => {
  const address = user.address

  if (address) {
    const street = address.street

    if (street) {
      return street.name
    }
  }
  return 'no street'
}

// VS

const streetName = user =>
  fromNullable(user.address)
  .chain(a => fromNullable(a.street))
  .map(s => s.name)
  .fold(e => 'no street', n => n)

const concatUniq = (x, ys) => {
  const found = ys.filter(y => y === x)[0]
  return found ? ys: ys.concat(x)
}

// VS

const concatUniq = (x, ys) =>
  fromNullable(ys.filter(y => y === x)[0])
  .fold(() => ys.concat(x), y => ys)

const wrapExample = example => {
  if (example.previewPath) {
    try {
      example.preview = fs.readFileSync(example.previewPath)
    } catch(e) {}
  }
  return example
}

// VS

const readFile = x => tryCatch(() => fs.readFileSync(x))
const wrapExample = example =>
  fromNullable(example.previewPath)
  .chain(readFile)
  .fold(() => example,
        ex => Object.assign({preview: p}, ex))

const parseDbUrl = cfg => {
  try {
    const c = JSON.parse(cfg)
    if (c.url) {
      return c.url.match(/postgres:/)
    }
  } catch (e) {
    return null
  }
}

// VS

const parseDbUrl = cfg =>
  tryCatch(() => JSON.parse(cfg))
  .chain(c => fromNullable(c.url))
  .fold(e => null,
        u => u.match(/postgres/))
