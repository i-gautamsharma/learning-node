const express = require("express");
const app = express();
const register=require('./routes/register')
const search=require('./routes/search')
app.use(express.static("./Web"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/register',register)
app.use('/search',search)
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to HomePage...</h1>");
});
app.listen(3300, () => {
  console.log("app is listening on 3300....");
});
