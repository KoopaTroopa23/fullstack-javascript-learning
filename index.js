// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Add JSON body support 
app.use(express.json());


// Define the port the server will run on
const PORT = 3000;

// Root route ("/")
// This runs when someone goes to http://localhost:3000/
app.get("/", (req, res) => {
  // Send a plain text response to the client
  res.send("Express backend is running!");
});

// In-memory data (temporary storage)
// This simulates data you would later store in a database
const users = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "Addie" }
];

// Health check route
// Used by real systems to verify the service is running
app.get("/health", (req, res) => {
  // Send a JSON response indicating the service is healthy
  res.json({ status: "ok" });
});

// Users route
// Returns a list of users as JSON
app.get("/users", (req, res) => {
  // Send the users array to the client
  res.json(users);
});

app.post("/users", (req, res) => {
  const { name } = req.body;

  // Basic validation
  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  // Create a new user (in-memory)
  const newUser = {
    id: users.length + 1,
    name: name
  };

  users.push(newUser);

  // Return the created user
  res.status(201).json(newUser);
});


// Start the server and listen for incoming requests
app.listen(PORT, () => {
  // Log the URL so we know the server started successfully
  console.log(`Server running on http://localhost:${PORT}`);
});
