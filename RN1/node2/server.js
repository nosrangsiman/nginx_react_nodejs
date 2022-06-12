const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello! this is API port 5000");
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});