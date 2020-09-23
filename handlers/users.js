const bcrypt = require("bcryptjs");
const model = require("../model/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.JWT_SECRET;

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
    .then((user) => {
      //use the secret to sign containing the added users id which expires in 1 hour
      const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
      user.access_token = token;
      res.status(201).send(user);
    })
    .catch(next);
};

// const login = (req, res, next) => {
//     const user = req.body

// };
module.exports = { signup };
