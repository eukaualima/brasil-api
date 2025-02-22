// <!-- Importação de classes --!>
const CepRouter = require('./routes/CepRouter');
const IndexRouter = require('./routes/IndexRouter');
const ServerService = require('./services/ServerService');

// <!-- Servidor --!>
const server = new ServerService();

server.initRoutes([
  { path: '/', router: new IndexRouter().router },
  { path: '/cep', router: new CepRouter().router },
]);

server.start(8080);