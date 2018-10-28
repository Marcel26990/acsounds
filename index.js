const config = require('./config.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = config.prefix;

bot.login(config.token);

bot.on('ready', async () => {
    console.log(`Ready as ${bot.user.tag}`);
    client.setInterval(async function() {
        bot.user.setActivity('Fuck that shit I\'m outta here!', {type: "PLAYING"});
        client.setTimeout(function() {
            bot.user.setActivity('Hell no', {type: "PLAYING"});
        }, 15000);
        client.setTimeout(function() {
            bot.user.setActivity(`USE ${prefix}sound !!!!`, {type: "PLAYING"});
        }, 15000);
        client.setTimeout(function() {
            bot.user.setActivity('grab em by the pussy', {type: "PLAYING"});
        }, 15000);
        client.setTimeout(function() {
            bot.user.setActivity('Ey manne!', {type: "PLAYING"});
        }, 15000);
    }, 75000);
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    let args = message.content.split(" ");
    let cont = message.content.split(" ").slice(1).join(" ");
});