'use strict'

const Chat= require('../models/chat')

function getChat (req, res) {
  let chatId = req.params.chatId

  Chat.findById(chatId, (err, chat) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!chat) return res.status(404).send({message: `El chat no existe`})

    res.status(200).send({ chat })
  })
}

function getChats (req, res) {
  Chat.find({}, (err, chats) => {
    if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
    if (!chats) return res.status(404).send({message: 'No existen Chats'})

    res.send(200, { chats })
  })
}

function saveChat (req, res) {
  console.log('POST /api/chat')
  console.log(req.body)

  let chat = new Chat()
  chat.id = req.body.id,
	chat.comando = req.body.comando,
	chat.idbot = req.body.idbot,
	chat.Respuestas = req.body.Respuestas,
	chat.idusuario = req.body.idusuario,
	chat.saludos = req.body.saludos,
	chat.estado = req.body.estado
 
  chat.save((err, chatStored) => {
    if (err) res.status(500).send({message: `Error al salvar en la base de datos: ${err} `})

    res.status(200).send({ chat: chatStored })
  })
}

function updateChat (req, res) {
  let chatId = req.params.chatId
  let update = req.body

  Chat.findByIdAndUpdate(chatId, update, (err, chatUpdated) => {
    if (err) res.status(500).send({message: `Error al actualizar el chat: ${err}`})

    res.status(200).send({ chat: chatUpdated })
  })
}

function deleteChat (req, res) {
  let chatId = req.params.chatId

  Chat.findById(chatId, (err, chat) => {
    if (err) res.status(500).send({message: `Error al borrar el chat: ${err}`})

    chat.remove(err => {
      if (err) res.status(500).send({message: `Error al borrar el chat: ${err}`})
      res.status(200).send({message: 'El chat ha sido eliminado'})
    })
  })
}

module.exports = {
  getChat,
  getChats,
  saveChat,
  updateChat,
  deleteChat
}
