require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Welcome to the Salon Admin App');
});

app.listen(port, () => {
  console.log(`Admin app running on port ${port}`);
});
