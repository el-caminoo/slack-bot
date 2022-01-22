var express = require("express");
var bodyParser = require("body-parser");
var { PORT } = require("./keys");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("url is active");
});

// messages url

app.get("/messages", (req, res) => {
    res.send("Get request for /messages");
});

app.post("/messages", (req, res) => {
    res.send("POST request for /messages")
});

// auth url callback

app.get("/auth/callback", (req, res) => {
    res.send("Get request for /messages");
});

app.post("/auth/callback", (req, res) => {
    res.send("Get request for /messages");
});

app.listen(PORT, () =>{
    console.log(`server is up at ${PORT}`);
});