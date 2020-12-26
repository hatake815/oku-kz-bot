const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '1414734259:AAEZKARK7KMD_mNLKCHUoRSPfflTVc41CqI'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
	bot.sendMessage(msg.chat.id, `Hello ${msg.from.first_name} pls select language`)
})