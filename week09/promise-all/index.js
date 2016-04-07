var rp = require('request-promise');

function getArtists() {
  return rp({uri: 'https://galvanize-promises.herokuapp.com/artists', json: true});
}

function getAlbums(artistId) {
  return rp({uri: 'https://galvanize-promises.herokuapp.com/albums/' + artistId, json: true});
}

getArtists().then(data => {
  // Here, we'll have all the information about what artists are available from the API
  // and what ID we need to use to get information about their albums from the API

  var arrayOfPromises = [];

  for (var i = 0; i < data.length; i++) {
    arrayOfPromises.push(getAlbums(data[i].id));
  }


  getAlbums(data[0].id).then(data => {
    // This is how we'd access data from an album, but what if we wanted to fetch all the albums
    // first, and then do some processing on the data?
    //
    // This is where Promise.all comes in handy. we can build an array of promises, and then
    // work with an array of results from the API.
    console.log(data);
  });
});
