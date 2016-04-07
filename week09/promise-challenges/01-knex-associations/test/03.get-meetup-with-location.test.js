var getMeetupWithLocation = require('../lib').getMeetupWithLocation;

describe("Queries", function () {

  var rallyId, zayoId;

  beforeEach(function () {
    return Promise.all([
      knex('locations').insert({name: 'Rally', address: '123 Main'}).returning('id'),
      knex('locations').insert({name: 'Zayo', address: '234 Elm'}).returning('id'),
    ])
    .then(function (ids) {
      rallyId = ids[0][0];
      zayoId = ids[1][0];
    })
  });

  describe("#getMeetupWithLocation", function () {
    var javaId, rustId;

    beforeEach(function () {
      return Promise.all([
        knex('meetups').insert({name: 'Java', location_id: rallyId}).returning('id'),
        knex('meetups').insert({name: 'Rust', location_id: rallyId}).returning('id'),
      ])
      .then(function (ids) {
        javaId = ids[0][0];
        rustId = ids[1][0];
      })
    });

    xit("returns the meetup with the given id along with the location", function () {
      return getMeetupWithLocation(javaId).should.become({
        meetup: {id: javaId, name: 'Java', location_id: rallyId, description: null},
        location: {id: rallyId, name: 'Rally', address: '123 Main'}
      });
    });
  });

});
