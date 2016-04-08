// Learning promises
const fetch = require('isomorphic-fetch');

const p = new Promise((resolve, reject) => {
    resolve(5);
})

const handleErrors = () => {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response
}

const data = fetch('http://google.com')
    .then(handleErrors)
    .then(res => res.text())
    .then(google => console.log(google))
    .catch(error => console.log(error))
