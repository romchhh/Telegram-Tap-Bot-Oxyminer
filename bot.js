const TelegramBot = require('node-telegram-bot-api');

// Your bot token
const token = '6496449692:AAFWiSxoBUjzkzhf6CSIUhEPPh2MKN1Ky8s';

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
                [{
                    text: 'Play',
                    web_app: { url: 'https://74e4-212-90-60-201.ngrok-free.app/' } // HTTPS URL from ngrok
                }],
                [{ text: 'Subscribe', url: 'https://t.me/your_channel' }],
                [{ text: 'How to play', callback_data: 'how_to_play' }],
                [{ text: 'Registration', callback_data: 'registration' }],
            ],
        },
    };

    bot.sendMessage(chatId, welcomeMessage, options);
});