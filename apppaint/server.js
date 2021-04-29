const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const PixelMatrix = require("./PixelMatrix.js");

const pixelMatrix = new PixelMatrix();

app.use(express.static("public"));

app.get("/reset", (req, res) => {
  pixelMatrix.iniMap();
  io.sockets.emit("rectlistdata", pixelMatrix.asArray());
  res.redirect("/");
});

io.sockets.on("connection", socket => {
  const thisClientIP = socket.handshake.address;
  socket.emit("address", thisClientIP);
  socket.emit("rectlistdata", pixelMatrix.asArray());

  socket.on("info", data => {
    socket.broadcast.emit("info", data);
  });

  socket.on("refresh", data => {
    socket.emit("rectlistdata", pixelMatrix.asArray());
  });

  socket.on("rect", data => {
    const color = { r: data.r, g: data.g, b: data.b };
    const coord = { x: data.x, y: data.y };
    const pixel = pixelMatrix.setPixel(coord, color);
    io.sockets.emit("rect", pixel);
  });
});

const PORT = process.env.PORT || 8080;

const server = http.listen(PORT, () => {
  console.log(
    `Servidor Http con Websockets escuchando en el puerto ${
      server.address().port
    }`
  );
});
server.on("error", error => console.log(`Error en servidor ${error}`));
