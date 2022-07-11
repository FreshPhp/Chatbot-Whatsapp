const fs = require('fs')

module.exports = config = async (fresh, message) => {

		// Try para contornar qualquer possível erro
		try {
			
			// Switch para fazer os comandos 
			switch(message.body) {
				
				// Cases são o que define o comando e o sistema executado
				case '/01':
				case '/1':
				case '01':
				case '1':
				case 'Opção 1':
					await fresh.reply(message.from, 'Olá, sou o projeto de um bot usando OpenWa, atualmente não possuo comandos por ser apenas uma base, mas, futuramente serei um linda robô <3', message.id)
				break
				
			}
			
		// Um catch em caso de erro
		} catch (error) {
			console.log('[ERRO > ]', error)
		}
}