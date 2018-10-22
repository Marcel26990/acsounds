const config = require('./config.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = config.prefix;

bot.login(config.token);

bot.on('ready', async () => {
    console.log(`Ready as ${bot.user.tag}`);
    setInterval(async function() {
        let status = ['Fuck that shit I\'m outta here!', 'Hell no', `USE ${prefix}sound !!!!`, 'grab em by the pussy', 'Ey manne!', ''];
        let chosen = status[Math.floor(Math.random() * status.length)];
        bot.user.setActivity(chosen, {type: "PLAYING"});
    }, 15000);
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    let args = message.content.split(" ");
    let cont = message.content.split(" ").slice(1).join(" ");

    
});
