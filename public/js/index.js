var socket = io();
            
function scrollToBottom(){
    //selectors
    var messages = jQuery('#messages');
    var newMessage = messages.children('li:last-child');
    //heights
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();

    if (clientHeight + scrollTop + newMessageHeight +  lastMessageHeight >= scrollHeight){
        messages.scrollTop(scrollHeight);
    }
}

socket.on('connect', function (){
    console.log('connected to server');

})
socket.on('disconnect', function() {
    console.log('Server is disconnected...');
})

socket.on('newMessage', function(message){
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
      text: message.text,
      from: message.from,
      createdAt: formattedTime
    });

    jQuery('#messages').append(html);
    scrollToBottom();
});

socket.on('newLocationMessage', function(message) {
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var location_template = jQuery('#location-message-template').html();
    var html = Mustache.render(location_template, {
        from: message.from,
        createdAt: formattedTime,
        url: message.url
    })
    jQuery('#messages').append(html);
    scrollToBottom();
})

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    let txtMessage = jQuery('[name = message]');
    socket.emit('createMessage', {
        from: 'User',
        text: txtMessage.val()
    }, function(){
        txtMessage.val('');
    })
})

var locationButton = jQuery('#send-location');

locationButton.on('click', (e) => {
    if (!navigator.geolocation){
        return alert('Geolocation not supported by your browser.');
    }

    locationButton.attr('disabled', 'disabled').text('Sending location...');

    navigator.geolocation.getCurrentPosition(function(position){
        locationButton.removeAttr('disabled').text('Send Location');
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
    }, function(){
        locationButton.removeAttr('disabled').text('Send Location');
        alert('Unable to fetch location.');
    })
})

