//Controlador para las estadisticas
var models = require('../models/models.js');

exports.mostrar = function  (req, res, next) {
	//tengo que acceder a la BBDD y obtener las distintas tablas
	//tablas de usuarios
	//tablas de comentarios
	//preguntas con y sin comentarios
	//una media

 	models.Quiz.findAll().then(function (quizes){
 		models.Comment.findAll().then(function (comments) {
 			 models.User.findAll().then(function (user) {

 		numUsuarios= user.length;
 		numPreguntas= quizes.length;
 		numComentarios = comments.length;
 		comentporPregunta = numComentarios/numPreguntas;
 		var preguntasconComent=0;
 		var preguntassinComent=0;

 			for (var i = quizes.length - 1; i >= 0; i--) {//recorro las preguntas
 				for (var j = comments.length - 1; j >= 0; j--) {//recorro comentarios
	 				if (comments[j].QuizId === i){//Cuando coinciden ids 
	 					preguntasconComent++;
	 					continue;
	 				}
 				}
 			}
 			preguntassinComent = numPreguntas - preguntasconComent; //Caso de sin preguntas
 		
 		res.render('statistics',{
			numUsuarios : numUsuarios,
			numPreguntas : numPreguntas,
			numComentarios: numComentarios,
			comentporPregunta : comentporPregunta,
			preguntasconComent : preguntasconComent,
			preguntassinComent : preguntassinComent,
			errors:[]
		});
		});
});
});
};