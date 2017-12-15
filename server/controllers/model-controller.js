var models = require('./../models');

module.exports = {
	createUser: (name, username, password, cb) => {
		models.User.create({
			name: name,
			username: username,
			password: password
		}).then((res) => {
			cb(res);
		})
	},
	login: (username, cb) => {
		models.User.findOne({
			where: {username: username},
			attributes: ['name', 'username', 'password_hash']
		}).then(function(res){
			cb(res)
		});
	}
}