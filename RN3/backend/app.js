const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const books = require('./data.json')
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-requested-With, Content-Type, Accept');
  next();

})

app.get('/', (req, res) => {
    res.json(books)
  })

app.listen(port, () => {
  console.log("Starting node.js at port " + port);
});