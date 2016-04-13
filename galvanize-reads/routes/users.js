var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var users = require('../models/users');

function Users() {
  return knex('users');
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/new', function(req, res, next) {
  res.render('new');
});

router.post('/new/signup', function(req, res, next) {
  users.createUser(req.body, (err, data) => {
    req.flash("success", "User Added Successfully");
    res.redirect('/books');
  });
});

router.post('/new/signin', function(req, res, next) {
  users.authenticateUser(req.body.user_email, req.body.password, (err, user) => {
    if (err) {
      res.redirect('/new');
    } else {
      req.session.user = user;
      res.redirect('/books');
    }
  });
});

router.get('/admin', function(req, res, next) {
  Users().select().then(function(users){
    res.render('admin', {users});
  })
});

router.get('/admin/remove/:name', function(req, res, next) {
  Users().where({user_name:req.params.name}).update({admin:false}).then(function(){
    res.redirect('/admin')
  })
});

router.get('/admin/add/:name', function(req, res, next) {
  Users().where({user_name:req.params.name}).update({admin:true}).then(function(){
    res.redirect('/admin')
  })
});

router.get('/admin/delete/:name', function(req, res, next) {
  Users().del().where({user_name:req.params.name}).then(function(){
    res.redirect('/admin')
  })
});

router.get('/signout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

module.exports = router;
