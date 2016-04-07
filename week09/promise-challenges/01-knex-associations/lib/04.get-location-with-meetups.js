var knex = require('./knex');

// Write a function that:
//
// * finds the location who's id equals the given locationId
// * _then_ finds all meetups where the meetup's `location_id` equals the given locationId, sorted by meetup id
//
// The returned promise should resolve to an object with `location` and `meetups` keys:
//
//    {
//      location: {id:56, name: "Some name", address: "Some address"},
//      meetups: [
//        {id:1, name: "Clojure Meetup", location_id: 56, description: "foo"},
//        {id:2, name: "Ruby Meetup", location_id: 56, description: "bar"},
//      ]
//    }
//
module.exports = function (locationId) {
  return knex('locations').select().where({id:locationId}).first().then(function(location){
    return knex('meetups').select().where({location_id:location.id}).then(function(meetups){
      return {location, meetups};
    });
  });
};
