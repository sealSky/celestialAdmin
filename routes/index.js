"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = require('express');
var router = exports.express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
module.exports = router;
