class IndexController
{
    constructor() {};

    async renderIndex(req, res)
    {
        res.render('IndexView');
    }
}

module.exports = IndexController;