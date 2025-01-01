import TelegramBot from 'node-telegram-bot-api';

// Your bot token
const token = '8173876405:AAFyywWKU4Fur2dxmKLp5q5QkNerr9zQQYM';

// Create bot
const bot = new TelegramBot(token, { polling: true });

// Send welcome message with buttons
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Welcome message
  const welcomeMessage = `
    Hello! Welcome to Oxyble!
    You are now the member of oxygen miners.
    Tap the screen and see your coin balance rise.
    Connect powered NFTPs and pump up your passive income.
    We'll definitely appreciate your efforts once the token is listed (the dates are coming soon).
    Don't forget about your friends — bring them to the game and get even more coins together!
    `;

  // Buttons
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Tap to Play',
            web_app: { url: 'https://f2b0-77-47-209-31.ngrok-free.app' }, // HTTPS URL from ngrok
          },
        ],
        [{ text: 'Subscribe', url: 'https://t.me/your_channel' }],
        [{ text: 'How to play', callback_data: 'how_to_play' }],
        [{ text: 'Registration', callback_data: 'registration' }],
      ],
    },
  };

  bot.sendMessage(chatId, welcomeMessage, options);
});
