var express = require('express');
var router = express.Router();
var queries = require('../lib');

router.get('/', function(req, res, next) {
  queries.listAll().then(function (data) {
    res.render('index', {
      users: data[0],
      meetups: data[1],
      locations: data[2],
    });
  });
});

router.get('/meetups/:id', function (req, res, next) {
});

router.get('/meetups/:id/location', function (req, res, next) {
});

router.get('/locations/:id', function (req, res, next) {
});

router.get('/users/:id', function (req, res, next) {
});

router.get('/meetups/:id/members', function (req, res, next) {
});

module.exports = router;
