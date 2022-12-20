const express = require("express");

// const router = express.Router();

const uuid = require("uuid");
const app = express();

let users = require("../../models/users");

app.get("/", (req, res) => {

    res.json(users);
  
  });

  // module.exports = router;