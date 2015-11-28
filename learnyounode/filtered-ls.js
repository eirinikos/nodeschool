// print a list of files in given directory
// filtered by the extension of the files

// directory is process.argv[2]
// extension to filter by is process.argv[3]

// readdir reads the contents of directory
// 'list' is array of filename strings
// path.extname(p) returns file extension

var fs = require('fs');
var path = require('path');

var p = process.argv[2];
var extension = process.argv[3];

fs.readdir(p, function callback (error, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + extension)
      console.log(file);
  });
});