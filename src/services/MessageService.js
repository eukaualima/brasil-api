class MessageService
{
    constructor() {};

    /**
     * Envio de mensagens de erro para a tela do usuário.
     * 
     * @param {string} message Mensagem que o usuário receberá na tela.
     */
    sendError(req, message)
    {
        req.flash('error', message);
    }

    /**
     * Envio de mensagens de sucesso para a tela do usuário.
     * 
     * @param {string} message Mensagem que o usuário receberá na tela.
     */
    sendSuccess(req, message)
    {
        req.flash('success', message);
    }
}

module.exports = MessageService;