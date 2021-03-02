const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World!</h1>');
});

server.listen(port, hostname, () => {
    console.log(`${hostname} is running at port:${port}`);
});