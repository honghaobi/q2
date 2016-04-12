var rp = require('request-promise');
var imb = process.argv[2];

rp({uri: 'http://www.omdbapi.com/?i=' + imb, json: true})
  .then(function(data) {
    var movie = {
      title: data.Title,
      year: data.Year,
      actors: data.Actors,
      genre: data.Genre,
      runtime: data.Runtime
    }
    console.log(movie);
  })
  .catch(function(err) {
    console.log(err);
  });
