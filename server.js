const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const frontRoutes = require("./routes/front");

var fs = require("fs");
app.engine("cte", function (filePath, options, callback) {
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err);
    // this is an extremely simple template engine
    var rendered = content
      .toString()
      .replace("^^titulo$$", options.titulo)
      .replace("^^mensaje$$", options.mensaje)
      .replace("^^autor$$", options.autor)
      .replace("^^version$$", options.version);
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "cte"); // register the template engine

app.get("/prueba", (req, res) => {
  res.render("prueba", {
    titulo: "Un titulo",
    mensaje: "probando cte",
    autor: "Lucas",
    version: "1.1",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/usuarios", usersRoutes);
app.use("/web", frontRoutes);

app.listen(3000);
