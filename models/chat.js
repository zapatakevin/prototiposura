'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChatSchema = Schema({
  id: { type: Number, default: 0 },
  comando: String,
  idbot: { type: Number, default: 0 },
  respuestas: String,
  idusuario: { type: Number, default: 0 },
  saludos: { type: String, enum: ['Buenos dias', 'Buenas tarde', 'Como podemos serviles', 'Bienvenido', 'Te saludamos desde el area transversal'] },
  Estado: String
})

module.exports = mongoose.model('Chat', ChatSchema)
