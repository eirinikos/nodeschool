// print a list of files in given directory
// filtered by the extension of the files
// fs.readdir(path, callback) returns an array of the filenames in the directory

// directory is process.argv[2]
// extension to filter by is process.argv[3]
// process.argv[3] will not come prefixed with a '.'

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function filtered(err, list){
  if (err) return console.error(err)
  list.forEach(function (filename) {
    if (path.extname(filename) === ext)
      console.log(filename);
  })
})