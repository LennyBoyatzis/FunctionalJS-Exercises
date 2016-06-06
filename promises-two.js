require('es6-promise').polyfill();
require('isomorphic-fetch');

const request = new Request({
  method: 'GET',
  mode: 'cors',
  headers: new Headers({
    'Content-Type': 'application/json'
  })
})

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Sydney&id=2172797`)
  .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  })
  .then(function(weather) {
      console.log(weather);
  })
  .catch((e) => {
    console.log('e', e)
  })
