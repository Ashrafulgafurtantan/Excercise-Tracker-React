const express = require("express");
let User = require("../models/user.model");

const router = express.Router();
router.get("/", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/add", (req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
// router.get("/name", function (req, res) {
//   res.send("<h1><b>Hello World</b></h1>");
// });

module.exports = router;
