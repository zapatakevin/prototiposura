//File: controllers/chats.js
var mongoose = require('mongoose');
var Chat  = mongoose.model('Chat');

//GET - Return all chats in the DB
exports.findAllChats = function(req, res) {
	Chat.find(function(err, chats) {
    if(err) res.send(500, err.message);

    console.log('GET /chats')
		res.status(200).jsonp(chats);
	});
};

//GET - Return a chats with specified ID
exports.findById = function(req, res) {
	Chat.findById(req.params.id, function(err,chat) {
    if(err) return res.send(500, err.message);

    console.log('GET /chat/' + req.params.id);
		res.status(200).jsonp(chat);
	});
};

//POST - Insert a new chat in the DB
exports.addChat = function(req, res) {
	console.log('POST');
	console.log(req.body);

	var chat = new Chat({
		id:         req.body.id,
		comando:    req.body.comando,
		idbot:      req.body.idbot,
		Respuestas: req.body.Respuestas,
		idusuario:  req.body.idusuario,
		saludos:    req.body.saludos,
		estado:     req.body.estado
	});

	chat.save(function(err, chat) {
		if(err) return res.send(500, err.message);
    res.status(200).jsonp(chat);
	});
};

//PUT - Update a register already exists
exports.updateChat = function(req, res) {
	Chat.findById(req.params.id, function(err, chat) {
		chat.id          = req.body.petId;
		chat.comando     = req.body.comando;
		chat.idbot       = req.body.idbot;
		chat.Respuestas  = req.body.Respuestas;
		chat.idusuario   = req.body.idusuario;
		chat.saludos     = req.body.saludos;
		chat.estado      = req.body.estado;

		chat.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(chat);
		});
	});
};

//DELETE - Delete a Chat with specified ID
exports.deleteChat = function(req, res) {
	Chat.findById(req.params.id, function(err, chat) {
		chat.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};