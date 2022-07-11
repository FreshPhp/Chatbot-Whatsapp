const wa = require('@open-wa/wa-automate')
const config = require('./config')

// A função que o faz carregar as mensagens
function start(fresh) {
	fresh.onMessage(async message => await config(fresh, message))
} // Função que analisa o recebimento de mensagens

// Cria o cliente de inicialização
wa.create().then(fresh => start(fresh))