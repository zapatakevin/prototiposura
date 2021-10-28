'use strict'

const express = require('express')
const ChatCtrl = require('../controllers/chat')
const api = express.Router()

api.get('/chat', ChatCtrl.getChats)
api.get('/chat/:chatId',ChatCtrl.getChat)
api.post('/chat',ChatCtrl.saveChat)
api.put('/chat/:chatId', ChatCtrl.updateChat)
api.delete('/chat/:chatId', ChatCtrl.deleteChat)


module.exports = api
