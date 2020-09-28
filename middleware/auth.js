const model = require("../model/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const error = new Error("Authorization header required");
    error.status = 400;
    next(error);
  }
  const token = authHeader.replace("Bearer ", "");

  try {
    const data = jwt.verify(token, SECRET);
    model
      .readUserById(data.user)
      .then((user) => {
        req.user = user;
        next();
      })
      .catch(next);
  } catch (_error) {
    console.log(_error);
    const error = new Error(_error);
    error.status = 401;
    next(error);
  }
};

module.exports = verifyUser;
