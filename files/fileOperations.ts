var fs=require("fs");
//Asynchronous - Opening file
console.log("Going to open file");
fs.open('input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('File opended successfully');
});

var fs1 = require("fs");

console.log("Going to get file info!");
fs1.stat('input.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Got file info successfully!");
   
   // Check file type
   console.log("isFile ? " + stats.isFile());
   console.log("isDirectory ? " + stats.isDirectory());    
});