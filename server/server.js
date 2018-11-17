const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app =  express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to Chat App'));
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User has Jointed'));
    
    socket.on('createMessage', (message, callback) => {
        console.log(`createMessage from:${message.from}  text:${message.text}`);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback();
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage',generateLocationMessage('Admin', coords.latitude , coords.longitude));
    });

    socket.on('disconnect', () =>{
        console.log('Client is disconnected');
    })
})

server.listen(port, () => {
    console.log(`This server is up and running on port ${port}`);
});