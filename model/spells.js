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

//creates spells
const createSpell = (data) => {
  return db
    .query(
      "INSERT INTO spells (author_id, spell_name) VALUES ($1, $2) RETURNING *",
      [data.author_id, data.spell_name]
    )
    .then((result) => result.rows[0]);
};

//delete spells
const deleteSpell = (id) => {
  return db.query("DELETE FROM spells WHERE id=$1", [id]);
};

module.exports = { readSpellById, readAllSpells, createSpell, deleteSpell };
