const express = require("express");
const app = express();
const { ids } = require("./data.js");
app.use(express.static("./Web"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to HomePage...</h1>");
});

app.post("/login", (req, res) => {
  const { Name, Password } = req.body;
  if (Name) {
    res.status(200).send(`Welcome ${Name} Your Credentials are : ${Password}`);
  } else {
    res.status(401).send("Please Provide name And Credentials");
  }
});

app.post("/create", (req, res) => {
  console.log(req.body);
  res.status(200).json({ success: true, data: ids });
});

app.listen(3300, () => {
  console.log("app is listening on 3300....");
});
