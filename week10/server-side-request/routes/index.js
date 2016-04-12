var express = require('express');
var router = express.Router();
var rp = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

rp({uri: 'http://www.omdbapi.com/' + process.argv[2]})
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });


// rp({uri: 'https://fs-student-roster.herokuapp.com/'})
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
//
//   var data = {
//     name: 'Baxster',
//     hobby: 'Surviving being thrown off bridges',
//     avatar: 'http://cdn.bleedingcool.net/wp-content/uploads/2013/11/baxter-600x354.jpg'
//   };
//
//   var options = {
//     uri: 'https://fs-student-roster.herokuapp.com/',
//     method: 'POST',
//     json: true,
//     body: data
//   };
//
//   rp(options)
//     .then(function(parsedBody) {
//       console.log(parsedBody);
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
module.exports = router;
