// src/app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// simple homepage route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to web-app-jira-demo</h1>');
});

// create placeholder for auth route (future)
app.get('/auth', (req, res) => {
  res.send('Auth endpoint (TODO)');
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
