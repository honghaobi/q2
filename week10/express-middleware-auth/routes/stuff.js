const express = require('express');
const router = express.Router();

function myAccountRequired(req, res, next) {
  if (req.session.user.id.toString() === req.params.id) {
    next();
  } else {
    res.redirect('/');
  }
}

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
});

router.get('/:id/regularStuff', (req, res, next) => {
  res.render('users/regularStuff')
});

router.get('/:id/specialStuff', myAccountRequired, (req, res, next) => {
  res.render('users/specialStuff')
});

module.exports = router;
