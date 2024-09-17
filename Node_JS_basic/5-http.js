const http = require('node:http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((request, response) => {
  if (request.url === '/') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('This is the list of our students');
  } else {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Not found');
  }
});

app.listen(port, host, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
