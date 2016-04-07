var getMeetups = require('../lib').getMeetups;

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

  describe("#getMeetups", function () {
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

    xit("returns all meetups", function () {
      var promise = getMeetups();
      return promise
        .should.eventually.contain( {id: javaId, name: 'Java', location_id: rallyId, description: null} )
        .should.eventually.contain( {id: rustId, name: 'Rust', location_id: rallyId, description: null} );
    });
  });

});
