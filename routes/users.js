var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  var users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }];
  res.render('JavaScriptSyntax', { users: users });
});

router.get('/log', function (req, res) {
  res.send('Test..');
});

module.exports = router;
