const { Pool } = require("pg");
const url = require("url");
require("dotenv").config();

if (!process.env.DATABASE_URL2)
  throw new Error("Environment variable DATABASE_URL must be set");

module.exports = new Pool({
  connectionString: process.env.DATABASE_URL2,
  ssl: { rejectUnauthorized: false },
});
