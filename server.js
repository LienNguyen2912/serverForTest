const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/delayed-response', (req, res) => {
  // Simulate a delay of 2 seconds before responding
  setTimeout(() => {
    res.json({ message: 'hello world' });
  }, 5000);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});