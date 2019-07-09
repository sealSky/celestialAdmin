let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(1);
  res.render('index', { title: 'Express' });
});

module.exports = router;
export {}