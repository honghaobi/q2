var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

function readers() {
  return knex('readers');
}

router.get('/readers', function(req, res) {
  readers().select().then(function(results){
    res.render('readers/index', {readers: results});
  });
});

router.get('/readers/new', function(req, res) {
  res.render('readers/new', {reader: {}});
});

router.post('/readers', function(req, res) {
  var reader = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  }
  readers().insert(reader).then(function(result){
    res.redirect('/readers');
  });
});


router.get('/readers/:id', function (req, res) {
  readers().where('id', req.params.id).first().then(function(result){
    res.render('readers/show', {reader: result });
  });
})

router.get('/readers/:id/edit', function (req, res) {
  readers().where('id', req.params.id).first().then(function(result){
    res.render('readers/edit', {reader: result });
  });
})

router.post('/readers/:id', function (req, res) {
  readers().where('id', req.params.id).update(req.body)
  .then(function(result){
    res.redirect('/readers');
  });
});

router.post('/readers/:id/delete', function (req, res) {
  readers().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/readers');
  })
})

module.exports = router;
