const {Telegraf} = require("telegraf");

const TOKEN = '5951463780:AAE7CKrnsNXKYqEecGW435K4HljDU-IKsZ0'
const bot = new Telegraf(TOKEN)

const web_link = 'https://superb-druid-e88410.netlify.app/';
bot.start((ctx) =>
    ctx.reply('Welcome', {
        reply_markup: { keyboard: [[ {
            text:'Web app', web_app: { url: web_link } }
            ]]
        }
    })
)

bot.launch();