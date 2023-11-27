// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Simulated cryptocurrency data
const cryptocurrencies = [
  { id: 1, name: 'Bitcoin', price: 50000 },
  { id: 2, name: 'Ethereum', price: 3000 },
  // Add more cryptocurrencies
];

// Endpoint to get a list of available cryptocurrencies
app.get('/api/cryptocurrencies', (req, res) => {
  res.json(cryptocurrencies);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
