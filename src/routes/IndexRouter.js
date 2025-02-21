const IndexController = require('../controllers/IndexController');
const express = require('express');

class IndexRouter
{
    constructor()
    {
        this.router = express.Router();
        this.index_controller = new IndexController();
        this.initRoutes();
    }

    initRoutes()
    {
        this.router.get('/', (req, res) => this.index_controller.renderIndex(req, res));
    }
}

module.exports = IndexRouter;