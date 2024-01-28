const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route for POST method
app.post('/delayed', (req, res) => {
  // Simulate a delay of 2 seconds before responding
  setTimeout(() => {
    res.json({ message: 'Yeahh! Hello world after delaying 5s!' });
  }, 5000);
});

// Route for POST method with very long delay
app.post('/verydelayed', (req, res) => {
  // Simulate a delay of 3 minutes before responding
  setTimeout(() => {
    res.json({ message: 'Thanks for waiting. Hello world after delaying 3 minutes!' });
  }, 180000);
});
// Route for GET method
app.get('/', (req, res) => {
  res.json({ message: '**Server is ready and running my babe**!' });
});

app.listen(port, () => {
  console.log(`**Server listening at ${port}...`);
});
