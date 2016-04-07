var knex = require('./knex');

// Write a function that:
//
// * finds the meetup whose id equals the given meetupId
// * _then_ finds all memberships where the `meetup_id` equals the given meetupId
// * _then_ finds all users whose id is included in the membership's `user_id`
//
// The returned promise should resolve to an object with `meetup` and `members` keys:
//
//    {
//      meetup: {id:1, name: "Clojure Meetup", location_id: 56, description: "foo"},
//      members: [
//        {id:10, name: "Sam"},
//        {id:12, name: "Pat"}
//      ]
//    }
//
module.exports = function (meetupId) {
}
