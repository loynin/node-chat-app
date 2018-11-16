var socket = io();
            
socket.on('connect', function (){
    console.log('connected to server');
    socket.emit('createMessage', {
        from: 'Steven',
        text: 'Wow, this is socket.io'
    })

})
socket.on('disconnect', function() {
    console.log('Server is disconnected...');
})

socket.on('newMessage', function(message){
    console.log('New message', message);
});

