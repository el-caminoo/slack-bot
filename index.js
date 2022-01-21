var express = require("express");
var bodyParser = require("body-parser");
var { PORT } = require("./keys");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.send("url is active");
});

app.post("/post", (req, res) => {
    var {name, age} = req.body;
    res.json({"name": name, "age": age});
});

app.listen(PORT, () =>{
    console.log(`server is up at ${PORT}`);
});