//import event module
var events = require("events");
//create an Eventemitter object
var eventEmitter = new events.EventEmitter();
//create an event handler as follows
var connectHandler = function connected() {
    console.log("connected successfully");
    // fire the data_received event
    eventEmitter.emit("data_received");
};
//bind the event connection with the event handler
eventEmitter.on('connection', 'connectHandler');
//Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function () {
    console.log("received sucessfully");
});
//Fire the connection event
eventEmitter.emit("connection");
console.log("Program ended");
