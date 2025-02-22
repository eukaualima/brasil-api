class CepController
{
    constructor() {};

    async renderCep(req, res)
    {
        res.render('CepView');
    }
}

module.exports = CepController;