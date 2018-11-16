const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app =  express();

var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Johnson',
        text: 'Hello ...',
        createAt: 123
    });
    
    socket.on('createMessage', (message) => {
        console.log('Create Message', message);
    })

    socket.on('disconnect', () =>{
        console.log('Client is disconnected');
    })
})

server.listen(port, () => {
    console.log(`This server is up and running on port ${port}`);
});