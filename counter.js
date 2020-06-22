var counter = function(arr){
    return 'there are ' + arr.length + 'elements in the array';
};
var adder = function(a,b){
    return `the sum of the two numbers is ${a+b}`;
};

var pi = 3.142;

module.exports.counter = counter;
module.exports.addder = adder;
module.exports.pi = pi;
