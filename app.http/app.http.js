const express = require("express");
const app = express();
const port = 3000;

const axios = require("axios");

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/books", (req, res) => {
  if (req.query.title === undefined && req.query.category === undefined) {
    axios.get(`http://localhost:3500/act?role=store&api=search`).then().catch();
  } else if (req.query.title) {
    axios
      .get(
        `http://localhost:3500/act?role=store&api=search&by=title&title=${req.query.title}`
      )
      .then()
      .catch();
  } else if (req.query.category) {
    axios
      .get(
        `http://localhost:3500/act?role=store&api=search&by=category&category=${req.query.category}`
      )
      .then()
      .catch();
  }
});

app.listen(port, () =>
  console.log(`API started listening on port http://localhost:${port}`)
);
