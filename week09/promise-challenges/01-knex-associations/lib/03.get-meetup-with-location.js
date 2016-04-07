var knex = require('./knex');

// Write a function that:
//
// * finds the meetup whose id equals the given meetupId
// * _then_ finds the location that matches the meetup's `location_id`
// * and returns an object that contains both objects
//
// The returned promise should resolve to an object with `meetup` and `location` keys:
//
//    {
//      meetup: {id:1, name: "Clojure Meetup", location_id: 56, description: "foo"},
//      location: {id:56, name: "Some name", address: "Some address"},
//    }
//
// NOTE: you'll have to nest promises in order for this to work
//
module.exports = function (meetupId) {
  return knex('meetups').select().where({id:meetupId}).first().then(function(meetup){
    return knex('locations').select().where({id:meetup.location_id}).first().then(function(location){
      return {location, meetup};
    });
  });
};
