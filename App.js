const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/user/:usuarioId", controllers.getUsers);
app.post("/register", controllers.register);
app.post("/login", controllers.login);

const port = 4000;

app.listen(port, () => {
  console.log("server in ", port);
  db();
});

module.exports = app;
