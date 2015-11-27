// print a list of files in given directory
// filtered by the extension of the files

// directory is process.argv[2]
// extension to filter by is process.argv[3]

// readdir reads the contents of directory
// 'files' is array of filename strings
// path.extname(p) returns file extension

var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function callback (err, files) {
  for (var i = 0; i < files.length; i++) {
    var filtered = files.filter(function matchExtension () {
      return path.extname(files[i]) === '.' + process.argv[3]
    })
  }
  console.log(filtered.join('\n'));
})