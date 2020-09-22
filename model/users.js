const db = require("../database/db_connection");

const createUser = (data) => {
  return db
    .query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [data.username, data.password]
    )
    .then((result) => result.rows[0]);
  //error handling in case people leave out some values
};

module.exports = { createUser };
