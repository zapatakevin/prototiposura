exports = module.exports = function(app, mongoose) {

	var chatbot = new mongoose.Schema({
		id: 		{ type: Number },
		comando: 	{ type: String },
		idbot: 	    { type: Number },
		Respuestas: { type: String },
		idusuario: 	{ type: Number },
		saludos: 		{
			type: String,
			enum: ['Buenos dias', 'Buenas tarde', 'Como podemos serviles', 'Bienvenido', 'Te saludamos desde el area transversal']
		},
		estado: 	{ type: String }
	});

	mongoose.model('Chat', chatbot);

};