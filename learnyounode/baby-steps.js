// sum the supplied command-line arguments

var array = process.argv;
var total = 0;

for (var i = 2; i < array.length; i++) {
  total += Number(array[i]);
};
console.log(total);