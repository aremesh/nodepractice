var os = require("os");
console.log('Temp dir is' + os.tmpdir());
console.log('The endians is ' + os.endianness());
console.log('The host name is' + os.hostname());
console.log('The OS type is' + os.type());
console.log('The OS platform is' + os.platform());
console.log('The OS arch is' + os.arch());
console.log('The OS release is' + os.release());
console.log('The OS uptime is' + os.uptime());
console.log('The OS loadavg is' + os.loadavg());
console.log('The OS totalmem is' + os.totalmem());
console.log('The OS freemem is' + os.freemem());
console.log('The OS cpus is' + os.cpus());
console.log('The OS networkInterfaces is' + os.networkInterfaces());
