//include the framework for operations
/*
create a REST application to add,list,get,delete users
 */
var express = require("express");
var app = express();
var fs = require("fs");
//get method to return the json result 
//http://127.0.0.1:8081/list
app.get('/list', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf-8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});
var user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
};
//http://127.0.0.1:8081/adduser
app.get('/adduser', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf-8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});
//http://127.0.0.1:8081/3
app.get('/:id', function (req, res) {
    fs.readFile(__dirname + "/users.json", 'utf-8', function (err, data) {
        data = JSON.parse(data);
        data["user4"] = user["user4"];
        var aUser = data['user' + req.params.id];
        console.log(aUser);
        res.end(JSON.stringify(aUser));
    });
});
//http://127.0.0.1:8081/deluser
var id = 2;
app["delete"]('/deleteUser', function (req, res) {
    console.log('tes');
    fs.readFile(__dirname + "/users.json", 'utf-8', function (err, data) {
        data = JSON.parse(data);
        console.log(data);
        delete data["user" + id.toString()];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});
var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Rest server is running in http://%s:%s', host, port);
});
