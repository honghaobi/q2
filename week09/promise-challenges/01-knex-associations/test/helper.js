'use strict';

const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const connection = require('knex');

chai.should();
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.knex = require('knex')(require('../knexfile').test);

beforeEach(() => {
  return Promise.all([
    knex('memberships').del(),
    knex('meetups').del(),
    knex('users').del(),
    knex('locations').del(),
  ]);
});
