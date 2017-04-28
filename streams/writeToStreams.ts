var fs=require("fs");
var dataToWrite="Here is the sample data to write on the table";
//create a writable stream
var writeStream=fs.createWriteStream("output.txt");

//write the data to stream with encoding to be utf-8
writeStream.write(dataToWrite,'UTF8');
//mark the end of the file
writeStream.end();
//handle stream events-->finish, and error
writeStream.on('finish',function(){
    console.log("write completed.");
});
writeStream.on('error',function(err){
    console.log(err.stack);
});
console.log("Program ended");