var net = require('net');
var client = net.connect({port: 8082}, function(err) {
    if (err){
        console.log(err);
    }
   console.log('connected to server!');  
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('disconnected from server');
});