var getMeetup = require('../lib').getMeetup;

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
    });
  });

  describe("#getMeetup", function () {
    var javaId, rustId;

    beforeEach(function () {
      return Promise.all([
        knex('meetups').insert({name: 'Java', location_id: rallyId}).returning('id'),
        knex('meetups').insert({name: 'Rust', location_id: rallyId}).returning('id'),
      ])
      .then(function (ids) {
        javaId = ids[0][0];
        rustId = ids[1][0];
      });
    });

    it("returns the meetup with the given id", function () {
      return getMeetup(javaId).should.become({
        id: javaId, name: 'Java', location_id: rallyId, description: null
      });
    });

    it("returns the meetup when give a string id", function () {
      return getMeetup(rustId.toString()).should.become({
        id: rustId, name: 'Rust', location_id: rallyId, description: null
      });
    });
  });

});
