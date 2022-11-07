const seneca = require("seneca")();
// const seneca = require("seneca")({ log: "silent" });
console.log(seneca.id);

const mongoStore = require("seneca-mongo-store");
const entities = require("seneca-entity");

seneca
  .use(entities)
  .use(mongoStore, {
    name: "bookStore",
    host: "127.0.0.1",
    port: 27017,
  })
  .use("./storePlugins.js")
  .ready((err) => {
    if (err) console.error(err);
    seneca.listen(3500);
  });

// seneca.use("./storePlugins.js").listen(3500);
// .act({ role: "store", api: "search" }, (err, reply) => {
//   if (err) console.error(err);
//   console.log(reply.response);
// })
// .act(
//   { role: "store", api: "search", by: "title", title: "Flex on Java" },
//   (err, reply) => {
//     if (err) console.error(err);
//     console.log(reply.response);
//   }
// )
// .act(
//   { role: "store", api: "search", by: "category", category: "Java" },
//   (err, reply) => {
//     if (err) console.error(err);
//     console.log(reply.response);
//   }
// );

// HTTP Transport

// http://localhost:3500/act?role=store&api=search
// http://localhost:3500/act?role=store&api=search&by=title&title=Flex on Java
// http://localhost:3500/act?role=store&api=search&by=category&category=Java
