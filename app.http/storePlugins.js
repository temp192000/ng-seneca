// const booksDB = require("./booksDB.json");

// function bookStore() {
//   this.add({ role: "store", api: "search" }, (msg, reply) => {
//     reply(null, { response: booksDB });
//   });

//   this.add({ role: "store", api: "search", by: "title" }, (msg, reply) => {
//     console.log(msg.title);
//     result = booksDB.filter((book) => book.title === msg.title);
//     reply(null, { response: result });
//   });

//   this.add({ role: "store", api: "search", by: "category" }, (msg, reply) => {
//     console.log(msg.category);
//     result = booksDB.filter((book) => book.category === msg.category);
//     reply(null, { response: result });
//   });
// }

function bookStore() {
  const booksDB = this.make$("books");

  this.add({ role: "store", api: "search" }, (msg, reply) => {
    booksDB.list$({}, (err, data) => {
      if (err) console.error(err);
      reply(null, { response: data });
    });
  });

  this.add({ role: "store", api: "search", by: "title" }, (msg, reply) => {
    booksDB.list$({ "title": msg.title }, (err, data) => {
      if (err) console.error(err);
      reply(null, { response: data });
    });
  });

  this.add({ role: "store", api: "search", by: "category" }, (msg, reply) => {
    booksDB.list$({"category":msg.category}, (err, data) => {
      if (err) console.error(err);
      reply(null, { response: data });
    });
  });
}

// console.log(`Plugin Works`);
module.exports = bookStore;
