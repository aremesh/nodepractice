var fs = require("fs");
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Text was added to the existing input.text file', function (err) {
    if (err) {
        return console.error(err);
    }
    console.log('Data written successfully');
    console.log('Lets read the newly written data');
    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous Read" + data.toString());
    });
});
