var express = require("express");
var router = express.Router();

router.get("/", function(require, res, next){
    res.send("This message indicates that the backend is properly running");
});

module.exports = router; 