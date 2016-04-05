var path = require('path');
var fs = require('fs');
var parse = require('csv-parse');

var original_data = [];

var parser = parse({delimiter: ','}, function(err, data){
  original_data.push(data);
  console.log(original_data);
});

module.exports = function(){
  fs.createReadStream(__dirname+'/data/galvanize_reads_sample_data.csv').pipe(parser);
};
