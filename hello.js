var http = require('http');

const port = process.env.PORT || 1337;
const ipAddress = '0.0.0.0';

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
<<<<<<< HEAD
}).listen(port, ipAddress);
=======
}).listen(1337, '127.0.0.1');
>>>>>>> 08773952fd61f5b8ffe4f999aac54cde2260db78

console.log(`Server running at http://${ipAddress}:${port}/`);

