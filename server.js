const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Route for POST method
app.post('/delayed', (req, res) => {
  // Simulate a delay of 2 seconds before responding
  setTimeout(() => {
    res.json({ message: 'hello world after delaying 5s!' });
  }, 5000);
});

// Route for GET method
app.get('/', (req, res) => {
  res.json({ message: 'Server is up and running babeeee**!' });
});

app.listen(port, () => {
  console.log(`**Server listening at ${port}...`);
});
