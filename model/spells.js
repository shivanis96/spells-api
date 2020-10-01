const db = require("../database/db_connection");

//gets spell by id
const readSpellById = (id) => {
  return db
    .query("SELECT * FROM spells WHERE id=($1)", [id])
    .then((result) => {
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

const updateSpell = (name, spell_id) => {
  return db
    .query(
      "UPDATE spells SET spell_name = $1 WHERE author_id = $2 RETURNING *",
      [name, spell_id]
    )
    .then((result) => result.rows[0]);
};
module.exports = {
  readSpellById,
  readAllSpells,
  createSpell,
  deleteSpell,
  updateSpell,
};
