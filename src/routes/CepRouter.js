const CepController = require('../controllers/CepController');
const express = require('express');

class CepRouter
{
    constructor()
    {
        this.router = express.Router();
        this.cep_controller = new CepController();
        this.initRoutes();
    }

    initRoutes()
    {
        this.router.get('/', (req, res) => this.cep_controller.renderCep(req, res));
        this.router.get('/:cep', (req, res) => this.cep_controller.renderCepData(req, res));
        this.router.get('/with-coordinates/:cep', (req, res) => this.cep_controller.renderCepCoordinatesData(req, res));
    }
}

module.exports = CepRouter;