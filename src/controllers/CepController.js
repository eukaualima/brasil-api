const CepService = require("../services/CepService");
const MessageService = require("../services/MessageService");

class CepController
{
    constructor() 
    {
        this.cep_service = new CepService();
        this.message_service = new MessageService();
    }

    async renderCep(req, res)
    {
        res.render('CepView');
    }

    async renderCepData(req, res)
    {
        const cep = req.params.cep;

        let cep_data;
        
        cep_data = await this.cep_service.getCep(cep);

        if (cep_data)
        {
            this.message_service.sendSuccess(req, `CEP de ${cep_data.city} encontrado!`);

            return res.render(`CepDataView`, { cep_data });
        }
        else
        {
            this.message_service.sendSuccess(req, `CEP inválido. Tente novamente!`);

            return res.redirect('/cep');
        }
    }

    async renderCepCoordinatesData(req, res)
    {
        const cep = req.params.cep;

        let cep_data;
        
        cep_data = await this.cep_service.getCepCoordinates(cep);

        if (cep_data)
        {
            this.message_service.sendSuccess(req, `CEP de ${cep_data.city} encontrado!`);

            return res.render(`CepCoordinatesDataView`, { cep_data });
        }
        else
        {
            this.message_service.sendSuccess(req, `CEP inválido. Tente novamente!`);

            return res.redirect('/cep');
        }
    }
}

module.exports = CepController;