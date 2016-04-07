var file = require('./../promises/fs-promises');

file.readFile(__dirname + '/../main.js', 'utf8', function (main) {
  file.writeFile(__dirname + '/../build/main.js', main, 'utf8', function (result) {
    console.log(result);
  })
})
