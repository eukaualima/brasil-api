const axios = require('axios');

class CepService
{
    constructor() {};

    /**
     * Faz uma busca simples de CEP na Brasil API.
     * 
     * @param {number} cep O CEP informado pelo usuário.
     * @returns {object} Os dados do CEP solicitado.
     */
    async getCep(cep)
    {
        let get_cep;

        try
        {
            get_cep = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);

            return get_cep.data;
        }
        catch (error)
        {
            return false;
        }
    }

     /**
     * Faz uma busca avançada (com coordenadas) de CEP na Brasil API.
     * 
     * @param {number} cep O CEP informado pelo usuário.
     * @returns {object} Os dados do CEP com coordenadas solicitado.
     */
     async getCepCoordinates(cep)
     {
         let get_cep;
 
         try
         {
             get_cep = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
 
             return get_cep.data;
         }
         catch (error)
         {
             return false;
         }
     }
}

module.exports = CepService;