const supabase = require('./db');
const { countWords, formatResults } = require('./utils/wordAnalysis');

/**
 * Handles the /rushmeta command
 * @param {Object} msg - Telegram message object
 */
async function queryData(msg) {
  const chatId = msg.chat.id;

  try {
    console.log(`Processing request from chat ${chatId}`);

    const { data, error } = await supabase
      .from('tokens')
      .select('name, symbol')
      .order('created_at', { ascending: false })
      .limit(500);

    if (error) throw error;

    if (!data || data.length === 0) {
      await msg.bot.sendMessage(chatId, 'No tokens found in the database');
      return;
    }

    const wordStats = countWords(data);
    const response = formatResults(wordStats);

    await msg.bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
    console.log('Response sent successfully');
  } catch (error) {
    console.error('Error processing request:', error);
    await msg.bot.sendMessage(chatId, 'Sorry, there was an error processing your request');
  }
}
  queryData
};