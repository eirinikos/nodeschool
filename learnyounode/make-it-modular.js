// since this module exports only one function
// mymodule itself can be called as a function
var mymodule = require('./make-it-modular_module.js');

var dir = process.argv[2];
var ext = process.argv[3];

console.log(mymodule.foobar(dir, ext));

// You must not print directly to the console from your module file,
// only from your original program.  

// In the case of an error bubbling up to your original program file, simply  
// check for it and print an informative message to the console.