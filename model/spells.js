const db = require("../database/db_connection");

const readSpell = (id) => {
  return db
    .query("SELECT * FROM spells WHERE id=($1)", [id])
    .then((result) => {
      console.log(result);
      return result.rows[0];
    })
    .catch((err) => console.log(err));
};

module.exports = { readSpell };
