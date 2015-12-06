// » Export a single function that takes exactly the arguments described.   
// » Call the callback exactly once with an error or some data as described.
// » Don't change anything else, like global variables or stdout.           
// » Handle all the errors that may occur and pass them to the callback.

module.exports = foobar()

var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

function foobar(dir, ext, callback){
  function callback(err, filtered_list){
    if (err) return "Oh no! " + console.error(err)
      var filtered_list = fs.readdir(dir, function filtered(err, list){
        if (err) return "Oh noes! " + console.error(err)
          list.forEach(function (filename) {
            if (path.extname(filename) === '.' + ext) return filename + '\n'
          })
      })
  }
}