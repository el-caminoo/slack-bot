var express = require("express");
var router = express.Router()

var index = router.get("/", (req, res) => {
    res.send("Home page is available")
});

module.exports = {
    index: index
}