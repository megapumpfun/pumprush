const TelegramBot = require('node-telegram-bot-api');
const config = require('./config');
const { queryData } = require('./handlers');

const bot = new TelegramBot(config.telegram.token, { polling: true });

// Register command handlers
bot.onText(/\/rushmeta/, queryData);

// Error handling
bot.on('error', (error) => {
  console.error('Telegram Bot Error:', error);
});

module.exports = bot;