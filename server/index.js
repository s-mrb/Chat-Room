const { v4: uuidv4 } = require('uuid');

const express = require("express");

const router = require("./router");

var connection_no = 0

/*
This object, which is traditionally named app, 
has methods for routing HTTP requests, configuring middleware,
rendering HTML views, registering a template engine, and 
modifying application settings that control how the application 
behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

- MDN 
 */
const app = express();

/*
qq -> app.listen vs createServer
https://forum.freecodecamp.org/t/http-createserver-vs-app-listen/368850

*/
var server = require("http").createServer(app);
var socket_io = require("socket.io");

// io is the object which give access to different methods.
var io = socket_io(server);

io.on("connection", (socket) => {
  // console.log(socket)
  connection_no = connection_no + 1
  console.log("new connection!! ",connection_no);

  socket.on("join", ({ name, room }, callback) => {
    var id = uuidv4();
    // send it welcome
    socket.emit("message", {
      name: "app",
      text: `Welcome ${name} to the ${room}`,
      id:id
    });

    // broadcast to rest people
    socket.broadcast
      .to(room)
      .emit("message", { name: "app", text: `${name} has joined the chat.`,id:id });
    // link room
    socket.join(room);
  });

  socket.on("message", ({ name, text, room, id }, callback) => {
    // broadcast to rest people
    socket.broadcast.to(room).emit("message", { name: name, text: text, id:id });
  });

  socket.on("leave", ({ name, room }, callbakc) => {
    socket.broadcast
      .to(room)
      .emit("message", { name: "app", text: `${name} left!` });
  });
});

var PORT = process.env.PORT || 55555;

// Wont need this if router is used
// app.get('/',(req,res)=>{
//     res.send('<h1>Sexy!</h1>')
// })

app.use(router);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
server.listen(PORT, () => {
  console.log(`Listening on\nhttp://localhost:${PORT}`);
});
