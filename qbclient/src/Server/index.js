const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
      origin: "https://dnd-chat-v2.herokuapp.com/",
      methods: ["GET", "POST"]
    }
  });
io.on("connect", (socket) => {
  console.log("user connected", socket.id);
  socket.on("chat-msg", function (data) {
    io.emit("chat-msg", data);
  });
});
server.listen(3001, function () {
  console.log("listening on port 3001");
});
