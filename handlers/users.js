const bcrypt = require("bcryptjs");
const { response } = require("express");
const model = require("../model/users");

const signup = (req, res, next) => {
  const addedUser = req.body;
  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(addedUser.password, salt))
    .then((hash) =>
      model.createUser({
        username: addedUser.username,
        password: hash,
      })
    )
    .then((user) => res.status(201).send(user))
    .catch(next);
};

module.exports = { signup };
