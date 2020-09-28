const model = require("../model/spells");

const getSpellById = (req, res, next) => {
  const id = req.params.id;
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
  const userId = req.user.id;
  model.readSpellById(spellId).then((spells) => {
    if (spells.author_id !== userId) {
      const error = new Error("User not authorised");
      error.status = 401;
      next(error);
    } else {
      model
        .deleteSpell(spellId)
        .then(() => {
          res.status(204).send("This spell no longer exists");
        })
        .catch(next);
    }
  });
};

const updateSpells = (req, res, next) => {
  const spellId = req.params.id;
  const userId = req.user.id;
  const newSpell = req.body.spell_name;
  model
    .readSpellById(spellId)
    .then((spell) => {
      if (spell.author_id !== userId) {
        const error = new Error("User not authorised");
        error.status = 401;
        next(error);
      } else {
        model
          .updateSpell(newSpell, spellId)
          .then((spell) => res.status(200).send(spell));
      }
    })
    .catch(next);
};

module.exports = {
  getSpellById,
  getAllSpells,
  createSpells,
  deleteSpells,
  updateSpells,
};
