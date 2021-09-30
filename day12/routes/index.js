var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks');
var register = require('../controllers/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'tanmay';
  sess.password = 'tanmay';
  sess.name = 'tanmay';
  sess.bhaukal = 'tanmay';
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  console.log('Redis Value: ', req.session.username);
  console.log('Redis Value: ', req.session.name);
  console.log('Redis Value: ', req.session.password);
  console.log('Redis Value: ', req.session.bhaukal);
  
  res.render('index', { title: 'Express' });
});
/*
email, passwd, confpassword req.body

l1

security, performance, edge cases.

email validate

password validate - min 6, 1UP, 1lo

passwd == cnfpasswd

l2

JS / SQL injection

l3

if email alredy exists

password hash

email.lowercase

save
*/

router.post('/register', registerInitialCheck, register)

module.exports = router;
