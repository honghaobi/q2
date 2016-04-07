var knex = require('./knex');

// Write a function that:
//
// * finds the user whose id equals the given userId
// * _then_ finds memberships whose `user_id` matches the given `userId`
// * _then_ finds meetups whose `id` matches any of the given `meetup_ids` from memberships
// * and returns an object that contains both objects
//
// The returned promise should resolve to an array of meetups:
//
//    [
//      {id:1, name: "Clojure Meetup", location_id: 56, description: "foo"},
//      {id:2, name: "Beer Meetup", location_id: 62, description: "bar"},
//    ]
//
// Resources
//
//  * http://knexjs.org/#Builder-pluck
//  * http://knexjs.org/#Builder-whereIn
//
module.exports = function (userId) {
  return knex('users').select().where({id:userId}).first().then(function(user){
    return knex('memberships').pluck('meetup_id').where({user_id:user.id}).then(function(membership){
      return knex('meetups').select().whereIn('id', membership).then(function(data){
        return data;
      });
    });
  });
};
