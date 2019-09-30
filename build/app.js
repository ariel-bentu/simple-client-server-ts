"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var fos = require("fos");
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World2!');
});
var api = {
    echo: function (arg) { return arg; },
    upper: function (arg) { return arg.toUpperCase(); }
};
fos.fosify(app, api, { allow: "*", name: "Server" });
app.use("/static", express.static(__dirname + "/"));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
