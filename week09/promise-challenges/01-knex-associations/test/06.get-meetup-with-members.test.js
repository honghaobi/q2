var getMeetupWithMembers = require('../lib').getMeetupWithMembers;

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

  describe("#getMeetupWithMembers", function () {
    var javaId, rustId;
    var tedId, sueId;

    beforeEach(function () {
      return Promise.all([
        knex('meetups').insert({name: 'Java', location_id: rallyId}).returning('id'),
        knex('meetups').insert({name: 'Rust', location_id: rallyId}).returning('id'),
      ])
      .then(function (ids) {
        javaId = ids[0][0];
        rustId = ids[1][0];
      })
      .then(function () {
        return Promise.all([
          knex('users').insert({name: 'Ted'}).returning('id'),
          knex('users').insert({name: 'Sue'}).returning('id'),
        ]);
      }).then(function (ids) {
        tedId = ids[0][0];
        sueId = ids[1][0];

        return Promise.all([
          knex('memberships').insert({user_id: tedId, meetup_id: javaId}),
          knex('memberships').insert({user_id: sueId, meetup_id: rustId}),
        ]);
      });
    });

    xit("returns the meetup with the given id along with the members", function () {
      return getMeetupWithMembers(javaId).should.become({
        meetup: {id: javaId, name: 'Java', location_id: rallyId, description: null},
        members: [ {id: tedId, name: 'Ted'} ]
      });
    });
  });

});
