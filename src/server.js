const express = require('express');
const mongoose = require('mongoose');
const io = require('socket.io');
const cors = require('cors');

const routes = require('./routes');

const httpServer = express();
const server = require('http').Server(httpServer);


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-otrr0.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

httpServer.use(cors());
httpServer.use(express.json());
httpServer.use(routes);

server.listen(3333);
