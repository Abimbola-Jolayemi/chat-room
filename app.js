// document.getElementById("joinRoomBtn").addEventListener("click", function() {
    
//     window.location.href = "chatroom.html";
// });

const express = require('express');
const app = express();
const path = require('path')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/chatroom.html'));
});



app.get('/chatroom', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/chatroom.html'));
});


  io.on('connection', (socket) => {
    console.log(`New connection: ${socket.id}`);
    socket.on( 'chat message', (msg) => {
      const messageData = {
        id: socket.id,
        message: msg
      };
      console.log(messageData)
      io.emit('chat message', messageData);
      socket.on('disconnect', () => {
        console.log(`${socket.id} disconnected`);
      });
    
    });
  });


server.listen(5000, () => {
  console.log('listening on 3000');
 });
