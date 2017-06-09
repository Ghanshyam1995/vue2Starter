var express = require("express");
var bodyParser = require("body-parser");
var port = 3000;
var app = express();
const account = require("./server-routes/Account");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/account", account);
app.listen(port, function() {
    console.log('App listening on port :' + port);
});