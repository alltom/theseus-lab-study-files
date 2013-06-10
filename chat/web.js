var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen(3000);

app.use(express.static(__dirname + '/public'));



var messages = new Array()

Array.prototype.inject = function(element) {
    if (this.length >= 5) {
        this.shift()
    }
    this.push(element)
}

io.sockets.on('connection', function(socket) {
    socket.emit("init", JSON.stringify(messages));

    socket.on('msg', function(msg) {
        var message = JSON.parse(msg)
        messages.inject(message)

        socket.broadcast.emit('msg', msg)
    });

    socket.on('disconnect', function() {
    });
});
