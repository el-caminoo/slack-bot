var express = require("express");
var router = express.Router()

var index = router.post("/slack/events",(req, res) => {
    var { challenge } = req.body;
    res.send(req.body.challenge)
});

module.exports = {
    index: index
}
