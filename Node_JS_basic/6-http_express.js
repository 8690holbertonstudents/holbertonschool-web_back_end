const express = require('express');

const app = express();
const host = 'localhost';
const port = 1245;

app.get('/', (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
