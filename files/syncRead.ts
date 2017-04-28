var fs=require("fs");

var data=fs.readFileSync("input.txt");
console.log("Synchronized Read"+data.toString());
console.log("Program Ended");