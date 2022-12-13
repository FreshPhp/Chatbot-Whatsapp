const wa = require('@open-wa/wa-automate');
const config = require('./config');

function start(fresh) {
	fresh.onMessage(async message => await config(fresh, message))
};

// Cria o cliente de inicialização
wa.create().then(fresh => start(fresh))
