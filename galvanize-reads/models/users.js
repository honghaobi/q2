const knex = require('../db/knex');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

function Users() {
  return knex('users');
}

Users.createUser = (data, callback) => {
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      callback(err);
    }

    bcrypt.hash(data.password, salt, (err, hash) => {
      if (err) {
        callback(err);
      }

      data.password_digest = hash;
      delete data.password;
      Users().insert(data, '*').then((data) => {
        callback(undefined, data);
      });
    });
  });
}

Users.authenticateUser = (email, password, callback) => {
  Users().where({user_email: email}).first().then(user => {
    if (!user) {
      return callback("Email and password don't match");
    }
    bcrypt.compare(password, user.password_digest, (err, isMatch) => {
      console.log(err);
      if (err || !isMatch) {
        console.log('nope');
        return callback("Email and password don't match");
      } else {
        console.log(user);
        return callback(undefined, user);
      }
    });
  });
}

module.exports = Users;
