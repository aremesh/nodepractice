var fs=require("fs");
var data='';
//create a readable stream
var readStream=fs.createReadStream("input.txt");
//set the encoding to utf8
readStream.setEncoding('utf8');
//Handle stream events
readStream.on('data',function(chunk){
    data+=chunk;
});
readStream.on('end',function(){
    console.log(data);
});
readStream.on('error',function(err){
    console.log(err.stack);
});
console.log("program ended");