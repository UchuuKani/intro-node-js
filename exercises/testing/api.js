const express = require("express");
const morgan = require("morgan");
const { urlencoded, json } = require("body-parser");
const users = require("./users");
const app = express();

app.use(morgan("dev"));
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // should ge user by given id in route param
    const user = await users.findUser(parseInt(id));
    res.status(200).send(user);
  } catch (err) {
    res.send("there was an error " + err.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await users.deleteUser(id);

    res.status(201).send({ id });
  } catch (err) {
    res.send("there was an error " + err.message);
  }
});

module.exports = app;
