var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/tvshows', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/bot')(app, mongoose);
var chatCtrl = require('./controllers/chats');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello world!");
});
app.use(router);

// API routes
var chats = express.Router();

chats.route('/chats')
  .get(chatCtrl.findAllChats)
  .post(chatCtrl.addChat);

  chats.route('/chats/:id')
  .get(chatCtrl.findById)
  .put(chatCtrl.updateChat)
  .delete(chatCtrl.deleteChat);

app.use('/api', chats);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});