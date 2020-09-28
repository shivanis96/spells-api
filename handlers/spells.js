const model = require("../model/spells");

const getSpellById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  model
    .readSpellById(id)
    .then((spells) => {
      res.send(spells);
    })
    .catch(next);
};

const getAllSpells = (req, res, next) => {
  model
    .readAllSpells()
    .then((spells) => res.send(spells))
    .catch(next);
};

const createSpells = (req, res, next) => {
  const data = {
    author_id: req.user.id,
    spell_name: req.body.spell_name,
  };
  model
    .createSpell(data)
    .then((spells) => res.status(201).send(spells))
    .catch(next);
};

const deleteSpells = (req, res, next) => {
  const spellId = req.params.id;
  model
    .deleteSpell(spellId)
    .then(() => {
      res.status(204).send();
    })
    .catch(next);
};
module.exports = { getSpellById, getAllSpells, createSpells, deleteSpells };
