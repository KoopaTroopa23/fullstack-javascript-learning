// index.js
// A beginner-friendly Express + SQLite backend API with clear comments.

// -------------------- Imports --------------------

// Express = web server framework (routes like GET/POST/DELETE)
const express = require("express");

// Our SQLite database connection (db.js creates/opens app.db and ensures the table exists)
const db = require("./db");

// -------------------- App Setup --------------------

const app = express();

// Allow JSON request bodies (so we can read req.body in POST/DELETE, etc.)
app.use(express.json());

// Server port
const PORT = 3000;

// -------------------- Database Seed --------------------
// If the users table is empty, insert a couple starter users (only runs once).

const countRow = db.prepare("SELECT COUNT(*) AS count FROM users;").get();

if (countRow.count === 0) {
  db.prepare("INSERT INTO users (name) VALUES (?)").run("Kevin");
  db.prepare("INSERT INTO users (name) VALUES (?)").run("Addie");
}

// -------------------- Routes --------------------

// Root route (quick “server is alive” check)
app.get("/", (req, res) => {
  res.send("Express + SQLite backend is running!");
});

// Health check route (used in real systems for monitoring)
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// React test route (simple API ping)
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

// -------------------- Users API (Recommended: /api/users) --------------------

// GET /api/users
// Returns all users
app.get("/api/users", (req, res) => {
  const rows = db.prepare("SELECT id, name FROM users ORDER BY id;").all();
  res.json(rows);
});

// POST /api/users
// Creates a new user
// Expects JSON: { "name": "Chloe" }
app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  const result = db.prepare("INSERT INTO users (name) VALUES (?)").run(name);

  res.status(201).json({
    id: result.lastInsertRowid,
    name: name,
  });
});

// DELETE /api/users/:id
// Deletes a user by id
// Example: DELETE http://localhost:3000/api/users/4
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "id must be a number" });
  }

  const result = db.prepare("DELETE FROM users WHERE id = ?").run(id);

  if (result.changes === 0) {
    return res.status(404).json({ error: "user not found" });
  }

  res.json({ deleted: id });
});

// -------------------- Optional Legacy Routes (/users) --------------------
// If you want to keep your original endpoints too, these just point to the same logic.

app.get("/users", (req, res) => {
  const rows = db.prepare("SELECT id, name FROM users ORDER BY id;").all();
  res.json(rows);
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  const result = db.prepare("INSERT INTO users (name) VALUES (?)").run(name);

  res.status(201).json({
    id: result.lastInsertRowid,
    name: name,
  });
});

// -------------------- Start Server --------------------

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
