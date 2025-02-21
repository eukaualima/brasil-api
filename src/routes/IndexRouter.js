const IndexController = require('../controllers/IndexController');
const express = require('express');

class IndexRouter
{
    constructor()
    {
        this.router = express.Router();
    }
}

module.exports = IndexRouter;