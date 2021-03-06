var express = require('express');

var app = express();
var server = app.listen(3000);


app.use(express.static('public'));

console.log("server connected");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
  console.log('new connection: ' + socket.id);

  socket.on('type', typeMsg);

  function typeMsg(data) {
   Player1 = socket.broadcast.emit('type', data);
   // io.sockets.emit('type', data);
    console.log(data);
  }
}