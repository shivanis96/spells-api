const db = require("../database/db_connection");

//createUser function for the signUp function in the handler
const createUser = (data) => {
  return db
    .query(
      "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
      [data.username, data.password]
    )
    .then((result) => result.rows[0]);
  //error handling in case people leave out some values
};

//readUser query for login function in the handler
const readUser = (username) => {
  return db
    .query("SELECT * FROM users WHERE username=($1)", [username])
    .then((result) => {
      result.rows[0];
      //   if (!result.rows.length)
      //     throw new Error(`No user with email '${email}' found`);
      //   return result.rows[0];
    });
};
module.exports = { createUser };
