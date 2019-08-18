const express = require('express');
const mongoose = require('mongoose');
const io = require('socket.io');
const cors = require('cors');

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);


mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-otrr0.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
