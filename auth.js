// auth.js
const express = require('express');
const app = express();

// Define login route
app.get("/login", (req, res) => {
  res.send("User login page");
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

