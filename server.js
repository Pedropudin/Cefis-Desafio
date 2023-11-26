//something like an import commands
const http = require('http');
const app = require('./app');

//Usa o servidor setado (não entendi) mas se não tiver nenhum usa o localhost:3000
const port = process.env.PORT || 3000;

//insert more latter
const server = http.createServer(app);

//start the server
server.listen(port);
