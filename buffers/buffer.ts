//Reading buffers
var buff=new Buffer(10);
var buf=new Buffer([5,10,15,20,25]);
var strbuf=new Buffer("Simple easy testing",'utf-8');
console.log(buff);
console.log(buf);
console.log(strbuf);

//Writing into buffers
//buf.toString([encoding][, start][, end])
//buf.write(string[, offset][, length][, encoding])
buff=new Buffer(256);
var len=buf.write("Simply easy learning");
console.log("Octets written:"+len);
var bufReader=new Buffer(26);
for(var i=0;i<26;i++){
bufReader[i]=i+97;
}
console.log(bufReader.toString('ascii'));
console.log(bufReader.toString('ascii',0,5));
console.log(bufReader.toString('utf8',0,5));
console.log(bufReader.toString('utf8'));

//Buffer to JSON
var jsonBuff=new Buffer('simple easy learning');
var jsonData=jsonBuff.toJSON(jsonBuff);
console.log(jsonData);
//Concatinate buffer
var buf1=new Buffer("My name is ");
var buf2=new Buffer("Ramesh ");
var buf3=Buffer.concat([buf1,buf2]);
console.log(buf3);
// compare buffer

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" is same as " + buffer2);
}else {
   console.log(buffer1 +" comes after " + buffer2);
}

//copy Buffer
var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());

//slice
var buffer1=new Buffer("New Text");
var buf2=buffer1.slice(0,3);
console.log("buffer2 content in "+buf2.toString());