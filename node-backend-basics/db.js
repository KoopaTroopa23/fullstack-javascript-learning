// db.js
// Creates/opens a local SQLite database file using better-sqlite3
// and ensures the users table exists.

const Database = require("better-sqlite3");

// Creates a file named app.db in your project folder (or opens it if it already exists)
const db = new Database("app.db");

// Create the users table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
  );
`);

module.exports = db;
