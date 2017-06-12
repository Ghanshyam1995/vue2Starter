var express = require("express");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();
const account = require("./server-routes/Account");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/account", account);
app.listen(port, function() {
    console.log('App listening on port :' + port);
});