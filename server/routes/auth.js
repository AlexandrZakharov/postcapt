const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");

router.post("/signup", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(422).json({ error: "Please fill in all fields!" });
  }
  User.findOne({ email })
    .then((user) => {
      if (user) {
        return res.status(422).json({ error: "User already exists!" });
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });

        user
          .save()
          .then((user) => {
            res.json({ message: "Successfully signed up" });
          })
          .catch((err) => {
            console.log(err);
          });
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(442).json({ error: "Please fill in all fields!" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(442).json({ error: "Invalid email or password!" }); //invalid email
    }
    bcrypt
      .compare(password, savedUser.password)
      .then((doMatch) => {
        if (doMatch) {
          // res.json({ message: "successfully signed in" });
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, firstName, lastName, email } = savedUser;
          res.json({ token, user: { _id, firstName, lastName, email } });
        } else {
          return res.status(442).json({ error: "Invalid email or password!" }); //invalid password
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;