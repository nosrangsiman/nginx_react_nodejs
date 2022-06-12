const express = require("express");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 4000;
const users = require('./data.json')

app.get("/", (req, res) => {
  res.send("Hello! This is a The Library");
});

app.get('/books', (req, res) => {
  res.json(users.map(user => user.Books))
})

app.get('/authors', (req, res) => {
  res.json(users)
})

app.get('/authors/:Author_id', (req, res) => {
  res.json(users.find(user => user.Author_id === Number(req.params.Author_id)))
})

app.get('/books/:id', (req, res) => {
  res.json(users.find(user => user.id === Number(req.params.id)))
})

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});