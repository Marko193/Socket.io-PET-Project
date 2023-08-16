const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// console.log('socket.io', io);

io.on('connection', (socket, req) => {
    //socket will send message to the client-frontend
    socket.emit('welcome', 'Talk from the Websocket server!');

    //server will listen (receive) to the message from client
    socket.on('message', (msg) => {
        console.log('msg', msg)
    })

})

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});

