import { Client, Intents } from 'discord.js';

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => console.log('ready'));
bot.on('message', async (msg) =>{
    if(msg.author.bot) return;

    await msg.reply('Hi');
});


bot.login('OTQ0ODMyOTQ0NDMyODk4MDQ4.GpztK-.0Zqh0Gor6xw-eCxqtJ0p6_051w6e6YoEkNld3M');

