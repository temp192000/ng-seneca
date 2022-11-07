const express = require("express");
const app = express();

var cors = require("cors");
app.use(cors());

const seneca = require("seneca")({ log: "silent" });

seneca.client(3500);
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

// /books
// /books?title=Coffehouse
// /books?category=Internet

app.get("/books", (req, res) => {
  if (req.query.title === undefined && req.query.category === undefined) {
    seneca.act({ role: "store", api: "search" }, (err, reply) => {
      if (err) res.status(500).send(err);
      res.json(reply.response);
    });
  } else if (req.query.title) {
    seneca.act(
      {
        role: "store",
        api: "search",
        by: "title",
        title: req.query.title,
      },
      (err, reply) => {
        if (err) res.status(500).send(err);
        res.json(reply.response);
      }
    );
  } else if (req.query.category) {
    seneca.act(
      {
        role: "store",
        api: "search",
        by: "category",
        category: req.query.category,
      },
      (err, reply) => {
        if (err) res.status(500).send(err);
        res.json(reply.response);
      }
    );
  }
});

app.listen(port, () =>
  console.log(`API started listening on port http://localhost:${port}`)
);

// TODO
// app.get("/books", (req, res) => {
//   if (req.query.title) {
//     seneca.act({ role: "store", api: "search", by: "title" }, (err, reply) => {
//       if (err) res.status(500).send(err);
//       res.json(reply.response);
//     });
//   } else if (req.query.category) {
//     seneca.act(
//       { role: "store", api: "search", by: "category" },
//       (err, reply) => {
//         if (err) res.status(500).send(err);
//         res.json(reply.response);
//       }
//     );
//   }

//   seneca.act({ role: "store", api: "search" }, (err, reply) => {
//     if (err) res.status(500).send(err);
//     res.json(reply.response);
//   });
// });
