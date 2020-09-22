const db = require("../database/db_connection");

//gets spell by id
const readSpellById = (id) => {
  return db
    .query("SELECT * FROM spells WHERE id=($1)", [id])
    .then((result) => {
      //console.log(result);
      return result.rows[0];
    })
    .catch((err) => console.log(err));
};

//gets all spells
const readAllSpells = () => {
  return db.query("SELECT * FROM spells").then((result) => result.rows);
};

module.exports = { readSpellById, readAllSpells };
