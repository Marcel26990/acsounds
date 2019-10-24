const config = require('./config.js');
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = config.prefix;

bot.login(config.token);

const runStatus = (statusList) => {
    return function runner() {
        if(!runner.prototype["index"])
            runner.prototype.index = [ 0 ];

        const pIndex = runner.prototype.index;

        const message = statusList[pIndex[0]++];
        if(statusList.length == pIndex[0])
            pIndex[0] = 0;

        // Could create an invoke but static call is sufficent
        bot.user.setActivity(message, {type: "PLAYING"});
    };
};

bot.on('ready', async () => {
    console.log(`Ready as ${bot.user.tag}`);
    setInterval(
        runStatus([ // Messages
            "Fuck that shit I'm outta here!",
            "Hell no",
            `USE ${prefix}sound !!!!`,
            "grab em by the pussy",
            "Ey manne!"
        ]),
    15 * 1000); // Message interval
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    let args = message.content.split(" ");
    let cont = message.content.split(" ").slice(1).join(" ");
});