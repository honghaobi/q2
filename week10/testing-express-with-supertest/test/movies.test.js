// in test/movies.test.js
var expect = require('chai').expect;
var app = require('../app')
var request = require('supertest')(app);

describe("something", function () {
  it("works", function (done) {
    request.get('/api/v1/movies')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.body.length).to.eq(0)
        done();
      })
  })
})
