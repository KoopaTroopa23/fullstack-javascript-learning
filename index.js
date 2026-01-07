// index.js
// A beginner-friendly Express + SQLite backend API with clear comments.

// -------------------- Imports --------------------

// Import the Express framework (used to create the web server and routes)
const express = require("express");

// Import our SQLite database connection (db.js creates/opens app.db and ensures the table exists)
const db = require("./db");

// -------------------- App Setup --------------------

// Create an Express application instance
const app = express();

// Enable JSON request body parsing.
// This lets us read req.body for POST/PUT requests that send JSON.
app.use(express.json());

// Define the port the server will run on
const PORT = 3000;

// -------------------- Database Seed --------------------
// If the users table is empty, insert a couple of starter users.
// This makes GET /users return something the first time you run the app.

const countRow = db.prepare("SELECT COUNT(*) AS count FROM users;").get();

if (countRow.count === 0) {
  db.prepare("INSERT INTO users (name) VALUES (?)").run("Kevin");
  db.prepare("INSERT INTO users (name) VALUES (?)").run("Addie");
}

// -------------------- Routes --------------------

// Root route ("/")
// This runs when someone goes to http://localhost:3000/
app.get("/", (req, res) => {
  // Send a simple text response to confirm the server is running
  res.send("Express + SQLite backend is running!");
});

// Health check route
// Real systems use this endpoint to confirm the service is alive.
app.get("/health", (req, res) => {
  // Send a JSON response indicating the service is healthy
  res.json({ status: "ok" });
});

// GET /users
// Returns a list of users from the SQLite database.
app.get("/users", (req, res) => {
  // Query all users ordered by id
  const rows = db.prepare("SELECT id, name FROM users ORDER BY id;").all();

  // Return results as JSON
  res.json(rows);
});

// POST /users
// Creates a new user in the SQLite database.
// Expects JSON like: { "name": "Chloe" }
app.post("/users", (req, res) => {
  // Pull "name" out of the JSON body
  const { name } = req.body;

  // Basic validation: require a name
  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  // Insert the new user into SQLite
  const result = db.prepare("INSERT INTO users (name) VALUES (?)").run(name);

  // Return the created user (including the new auto-generated id)
  res.status(201).json({
    id: result.lastInsertRowid,
    name: name
  });
});

// -------------------- Start Server --------------------

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  // Log the URL so we know the server started successfully
  console.log(`Server running on http://localhost:${PORT}`);
});
