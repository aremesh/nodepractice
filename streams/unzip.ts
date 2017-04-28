var fs=require('fs');
var zlib=require("zlib");
//decompress the file input.txt.gz to input.txt
fs.createReadStream("input.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("inputunzip.txt"))

console.log("File Decompressed");