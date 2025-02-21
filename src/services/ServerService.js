const express = require('express');
const flash = require('flash');
const path = require('path');
const session = require('express-session');
require('dotenv').config({ path: path.join(__dirname, '../config/.env')});

class ServerService
{
    constructor()
    {
        this.server = express();
    }

    /**
     * Configuração inicial do express.
     */
    initExpress()
    {
        this.server.use(flash());
        this.server.use(express.json());
        this.server.use(session({ secret: process.env.SERVER_SECRET, resave: false, saveUninitialized: false }));
        
        this.server.set('view engine', 'ejs');
        this.server.set('views', path.join(__dirname, '../views/pages'));
        
        this.server.use(express.static('views/pages'));
        this.server.use('/assets', express.static(path.join(__dirname), '../public/assets'));
        this.server.use('/vendor', express.static(path.join(__dirname), '../public/vendor'));
        this.server.use((req, res, next) => 
        {
            res.locals.successMessage = req.flash('success');
            res.locals.errorMessage = req.flash('error');
            
            next();
        });
    }

    /**
     * Inicialização de todas as rotas do servidor.
     * 
     * @param {object} routes Caminho e router para renderização de páginas.
     */
    initRoutes(routes)
    {
        routes.forEach(route => 
        {
            if (!route.path || typeof route.path !== 'string')
            {
                throw new Error(`((WEB)) => Caminho incorreto: ${route.path}`);
            }

            this.server.use(route.path, route.router);
        });
    }

    /**
     * Inicialização do servidor express.
     * 
     * @param {number} port Porta em que o servidor irá rodar.
     */
    start(port)
    {
        this.server.listen(port, () => 
        {
            console.log(`((WEB)) => Servidor inciado, rodando na porta ${port}!`);
        });
    }
}

module.exports = ServerService;