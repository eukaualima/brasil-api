// <!-- Importação de classes --!>
const IndexRouter = require('./routes/IndexRouter');
const ServerService = require('./services/ServerService');

// <!-- Servidor --!>
const server = new ServerService();

server.initRoutes([
  { path: '/', router: new IndexRouter().router }
]);

server.start(8080);