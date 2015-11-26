// require the 'fs' module
var fs = require('fs');

// fs.readFileSync returns a Buffer object
// containing the complete contents of the file

// fs.readFileSync(process.argv[2], 'utf8') => string
var contents = fs.readFileSync(process.argv[2]);

// stringify contents variable, split by newline
// count elements separated by newline, minus 1
var lines = contents.toString().split('\n').length - 1;

console.log(lines);
