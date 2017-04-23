
var events=require("events");
var eventEmitter=new events.EventEmitter();

//listener #1
var listener1=function listener1(){console.log("listener1 is executed");}

//listener #2
var listener2=function listener2(){console.log("listener2 is executed");}

// Bind the event with the listener1
eventEmitter.addListener('connection',listener1);
// Bind the event with the listener2
eventEmitter.on('connection',listener2);
// list the no of listeners

var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listeners listening to connection event");
eventEmitter.emit("connection");
eventEmitter.removeListener('connection',listener1);
console.log("emitter 1 will not listen now");
eventEmitter.emit('connection');


var eventListeners=require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners+" Listeners listening to connection event");
console.log("Program just ended");
