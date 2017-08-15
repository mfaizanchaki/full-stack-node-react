const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.write('Assalamu alaikum');

  res.end();
});

server.listen(3000);
