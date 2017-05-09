/**
 * Created by Kirik on 07.05.2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('result');
});

module.exports = router;
