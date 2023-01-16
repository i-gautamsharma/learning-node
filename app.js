const express = require("express");
const {data}= require("./data.js");
const app = express();
// app.use(express.static('./Web'))
app.get("/", (req, res) => {
  res.status(200).send('<h1>Welcome to HomePage...</h1>');
});
app.get("/about/query", (req, res) => {
  const { name } = req.query;
  let newdata=[...data]
  newdata = data.filter((item) => {
    return item.first_name.startsWith(name)
  })
  res.status(200).json(newdata)
});
app.all("*", (req, res) => {
  res.status(404).send("<h3> Resource Not Foud Buddy....</h3>");
});
app.listen(3300, () => {
  console.log("app is listening....");
});
