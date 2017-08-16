var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { title: 'Testament dashboard' });
});


module.exports = router;
