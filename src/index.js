const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello from express server!')
});

app.listen(PORT, () => console.log(`Server is running on ${PORT}...`));