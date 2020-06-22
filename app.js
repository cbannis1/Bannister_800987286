// var time = 0;
// //global objects
// setTimeout(function(){ // timeout function 
//     time += 2; 
//     console.log(time + ' seconds have passed');
//     if (time > 5){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname); //tells the directory 

// console.log(__filename);//tells the full file name as well as the directory 

// //fucntion expressions and modules
// var hello = function (){
//     console.log('hello');
// };

// function callFuntion(fun){
//     fun();
// }

// callFuntion(hello);

//modules and require
// require('./counter');

// counter(['z','x','y']);

var counter = require('events');

// var myEmitter = new EventSource.EventEmitter();

// myEmitter.on('SomeEvnent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', ' the event was emitted');

// var util = require('util');

// var Person = function (name){
//     this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var james = new Person('james');
// var mary = new Person('mary');
// var ryu = new Person('ryu');
// var people = [james, marry, ryu];

// people.forEach(function(person){
//     person.on('speak', function(mssg){
//         console.log(person.name + ' said: ' + mssg);
//     });
// });

// james.emit('speak', 'hello');
// ryu.emit('speak', 'yum');

//creating a server
var http = require('http');

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey there');
});

server.listen(3000, '127.0.0.1');
console.log("listening on port 3000");


