const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data storage
let users = [];

// Routes
app.get("/api/users", (req, res) => {
  res.json(users);
});

app.post("/api/users", (req, res) => {
  const user = req.body;
  users.push({ ...user, id: users.length + 1 });
  res.status(201).json(user);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
