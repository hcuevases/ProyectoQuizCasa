//Controlador para los usuarios
var models = require('../models/models.js');

exports.buscar = function(req,res){
	if(req.query.search != null){
		console.log(req.query.search);
		var search = '%' + (String(req.query.search)).replace(/\s/g,"%")+'%';
	models.User.findAll( {
	 	where:["username like ?", search]}).then(function(user){

	 		res.render('listausuarios', { user :user, errors :[]
	 		});

	 	//}).catch(function(error) {next(error)
	 	});
	 }else{

	 	models.User.findAll().then(function (user) {

	 	res.render('listausuarios', { user : user, errors: []});
		}).catch(function(error) { next(error);});
	 }
};