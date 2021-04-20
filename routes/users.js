const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

// app.user('/api/usuarios')

router.get("/", (req, res) => {
  const users = user.get();
  if (!users) {
    return res.status(404).json({
      error: "no hay usuarios creados",
    });
  }

  res.json(users);
});

router.post("/", (req, res) => {
  const data = req.body;
  if (user.add(data)) {
    if (data.form === "1") return res.redirect("http://localhost:3000/web");
    res.status(201).json(data);
  }
  res.status(400).send();
});

router.put("/:id", (req, res) => {
  const data = req.body;
  const { id } = req.params;
  if (user.update(id, data)) {
    res.status(201).json(data);
  }
  res.status(400).send();
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const currentUser = user.getById(id);
  if (currentUser) {
    return res.json(currentUser);
  }
  res.status(404).json({
    error: "usuario no encontrado",
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  user.remove(id);
  res.send();
});

module.exports = router;
