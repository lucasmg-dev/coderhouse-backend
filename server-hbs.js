const express = require("express");
const app = express();
const usersRoutes = require("./routes/users");
const frontRoutes = require("./routes/front");
const handlebars = require("express-handlebars");

app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    defaultLayout: "layout.hbs",
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials",
  })
);

app.set("views", "./views");
app.set("view engine", "hbs");

app.get("/prueba", (req, res) => {
  res.render("prueba", {
    titulo: "Un titulo",
    mensaje: "probando cte",
    autor: "Lucas",
    version: "1.1",
  });
});

app.get("/otraPrueba", (req, res) => {
  res.render("prueba2", {
    titulo: "Otra prueba",
    layout: "layout",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/usuarios", usersRoutes);
app.use("/web", frontRoutes);

app.listen(3000);
