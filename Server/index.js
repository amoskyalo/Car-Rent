const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const http = require("http").Server(app);
const PORT = 8080;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cors({ origin: "*" }));

const io = new Server(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  //when connect
  console.log(`⚡: ${socket.id} user just connected!`);

  //when a new user connects
  socket.on("addUser", (data) => {
    socket.broadcast.emit("newUser", data);
  });

  //send and get message
  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("sendMessage", (data) => {
    socket.broadcast.emit("receiveMessage", data);
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
  });
});

//listening to port 8080
http.listen(PORT, () => {
  console.log(`server is listening to port ${PORT}`);
});
