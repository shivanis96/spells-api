const express = require("express");
require("dotenv").config();
const spells = require("./handlers/spells");
const user = require("./handlers/users");
const handleError = require("./middleware/error");
const verifyUser = require("./middleware/auth");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

//spells routes
app.get("/spells/", spells.getAllSpells);
app.get("/spells/:id", spells.getSpellById);
app.post("/spells/", verifyUser, spells.createSpells);
app.delete("/spells/:id", verifyUser, spells.deleteSpells);
app.put("/spells/:id", verifyUser, spells.updateSpells);

//user routes
app.get("/users/:id", user.getUserById);
app.get("/users", user.getAllUsers);
app.post("/signup", user.signup);
app.post("/login", user.login);

app.use(handleError);

app.listen(PORT, () => console.log(`Listening on http:localhost:${PORT}`));
