var express = require("express");
var router = express.Router()

var index = (req, res) => {
    res.send("Home page is available")
};

module.exports = {
    index: index
}