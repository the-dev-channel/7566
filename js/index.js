require('dotenv').config();

const bot = require('./ffi');
bot.init();

// process.stdin.on('data', data => {
//     let str = data.toString().trim();
//     if (str === 'exit') {
//         process.exit();
//     }
//     let res = bot.receive(str);

//     console.log(res);
// });

// console.log(bot.runCommand('help', {
//     name: 'hri7566',
//     _id: "6e7a8fbe618e0f8a7e821319",
//     color: "#9900ff"
// }));

const { join } = require('path');
const { readFileSync } = require('fs');
const { exec } = require('child_process');

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const Discord = require('discord.js');

const client = new Discord.Client({
    intents: [
        'GUILDS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES'
    ]
});

client.on('ready', () => {
});

client.on('messageCreate', message => {
    if (message.author.bot) return;
    if (message.content.startsWith('.')) {
        let res = bot.receive(message.content.substring(1), {
            name: message.author.username,
            _id: message.author.id,
            color: message.author.displayHexColor
        });
        if (res) {
            message.channel.send(`\u034f${res}`);
        }
    }
});

client.login(DISCORD_TOKEN);

const Client = require('./MPP/Client');

let cl = new Client('wss://mpp.hri7566.info:8443');

cl.start();

cl.setChannel('lobby');

cl.on('hi', () => {
});

cl.on('a', msg => {
    if (msg.a.startsWith('.')) {
        let res = bot.receive(msg.a.substring(1), {
            name: msg.p.name,
            _id: msg.p._id,
            color: msg.p.color
        });

        if (res) {
            cl.sendArray([{
                m: 'a',
                message: `\u034f${res}`
            }]);
        }
    }
});
