const express = require("express");
const app = express();
const port = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("Hello! this is API port 6000");
});

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});