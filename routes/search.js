const express = require("express");
const router = express.Router()
const { ids } = require("../data.js");

router.post("/", (req, res) => {
    const { name } = req.body
    const newname = ids.find((item) => item.name===name)
    if (newname) {
      res.status(200).json(newname)
    } else {
      res.status(404).send('User Not Found')
    }
  });

module.exports=router