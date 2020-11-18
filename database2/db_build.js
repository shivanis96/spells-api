const fs = require("fs");
const dbConnection = require("./db_connection");

console.log("Resetting database...");

const sql = fs.readFileSync(`${__dirname}/db_build.sql`, "utf-8").toString();

dbConnection.query(sql, (err, res) => {
  if (err) throw err;
});
