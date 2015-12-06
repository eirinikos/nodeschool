var fs = require('fs');

// fs.readFile(process.argv[2], 'utf8', function logMyNumber(error, fileContents) {
//   var lines = fileContents.split('\n').length - 1;
//   console.log(lines);
// })

// or...

var contents = fs.readFile(process.argv[2], 'utf8', callback)

function callback(err, contents){
  if (err) { return console.error(err) };
  console.log(contents.split('\n').length - 1);
}