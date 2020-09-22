const model = require("../model/spells");

const getSpellById = (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  model
    .readSpell(id)
    .then((spells) => {
      res.send(spells);
    })
    .catch(next);
};

module.exports = { getSpellById };
