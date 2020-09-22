const express = require("express");
require("dotenv").config();
const spells = require("./handlers/spells");
const user = require("./handlers/users");
const handleError = require("./middleware/error");
const verifyUser = require("./middleware/auth");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

//add routes here
app.get("/spells/", spells.getAllSpells);
app.get("/spells/:id", spells.getSpellById);

app.post("/signup", user.signup);

//app.use(handleError);

app.listen(PORT, () => console.log(`Listening on http:localhost:${PORT}`));
