var express = require('express');
var bcrypt = require('bcryptjs');

var router = express.Router();
var mc = require('./model-controller.js');

router.post('/create-user', (req,res) => {
	mc.createUser(
		req.body.name, 
		req.body.username, 
		req.body.password, 
		(user) => {
			res.json(user)
		}
	)
});

router.post('/login', function(req,res){
	mc.login(
		req.body.username,
		(users) => {
			res.json(bcrypt.compareSync(req.body.password, users.password_hash));
		}
	)
});

module.exports = router;