const express = require("express");
const app = express();

let USERS_DB = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/usuarios", (req, res) => {
  if (USERS_DB.length < 1) {
    return res.status(404).json({
      error: "no hay usuarios creados",
    });
  }

  const { name } = req.query;
  if (name) {
    const filtered = USERS_DB.filter(
      (user) => user.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    res.json(filtered);
  }
  res.json(USERS_DB);
});

app.post("/api/usuarios", (req, res) => {
  const data = req.body;
  data.id = USERS_DB.length + 1;
  USERS_DB.push(data);
  res.status(201).json(data);
});

app.get("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const userFiltered = USERS_DB.filter((user) => user.id === parseInt(id))[0];
  if (userFiltered) {
    return res.json(userFiltered);
  }
  res.status(404).json({
    error: "usuarios no encontrado",
  });
});

app.delete("/api/usuarios/:id", (req, res) => {
  const { id } = req.params;
  USERS_DB = USERS_DB.filter((user) => user.id !== parseInt(id));
  res.send();
});

app.listen(3000);
