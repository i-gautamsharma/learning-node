const express = require("express");
const router = express.Router()

// this will handle all the requests inside the url register,since register is the base path 
router.post("/", (req, res) => {
    const { Name, Password } = req.body;
    if (Name) {
      res.status(200).send(`Welcome ${Name} Your Credentials are : ${Password}`);
    } else {
      res.status(401).send("Please Provide name And Credentials");
    }
});

module.exports=router