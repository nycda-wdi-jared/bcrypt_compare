var models = require('./../models');

module.exports = {
	login: (username, cb) => {
		models.User.findOne({
			where: {username: username},
			attributes: ['name', 'username', 'password_hash']
		}).then(function(res){
			cb(res)
		});
	},
}