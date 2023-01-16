const { urlencoded } = require("express");
const express = require("express");
const app = express();
const { ids } = require("./data.js");
app.use(express.static('./Web'))
app.use(urlencoded({extended:false}))
app.get("/",(req, res) => {
  res.status(200).send("<h1>Welcome to HomePage...</h1>");
});
app.post("/login", (req, res) => {
  const { Name, Password } = req.body
  if (Name) {
    res.status(200).send(`Welcome ${Name} Your Credentials are : ${Password}`)
  } else {
    res.status(401).send("Please Provide name And Credentials")
  }
});




app.listen(3300, () => {
  console.log("app is listening....");
});
