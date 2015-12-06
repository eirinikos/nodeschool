// » Export a single function that takes exactly the arguments described.   
// » Call the callback exactly once with an error or some data as described.
// » Don't change anything else, like global variables or stdout.           
// » Handle all the errors that may occur and pass them to the callback.
module.exports = function(directory, extension, callback){

  var fs = require('fs');
  var path = require('path');

  function callback(err, filtered_list){
    if (err) return "Oh no! " + console.error(err)
      var filtered_list = fs.readdir(dir, function filtered(err, list){
        if (err) return "Oh noes! " + console.error(err)
          list.forEach(function(filename) {
            if (path.extname(filename) === '.' + ext) return filename + '\n'
          });
      });
  }
}
