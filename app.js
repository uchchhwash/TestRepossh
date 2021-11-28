// const Logger = require('./logger')

// const logger = new Logger();

// logger.on('messageLogged', (arg) => console.log('Listener Called', arg));

// logger.log('message');
const http = require('http');
const { json } = require('stream/consumers');

const server = http.createServer((req, res) => {
    if(req.url === '/root')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('listening on port: 3000');