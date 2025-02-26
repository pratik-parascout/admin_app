require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const initializedb = require('shared_library/init');

app.get('/', (req, res) => {
  res.send('Welcome to the Salon Admin App');
});

initializedb().then(() => {
  app.listen(port, () => {
    console.log(`Admin app running on port ${port}`);
  });
});
