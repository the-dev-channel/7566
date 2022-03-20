require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const MPP_TOKEN = process.env.MPP_TOKEN;

const bot = require('./ffi');
bot.init();

globalThis.bot = bot;

const { DiscordClient, MPPClient } = require('./Clients');

const clients = [];
const clientList = require('./clients.json');

for (let cl of clientList) {
    let c;

    switch (cl.type) {
        case 'Discord':
            c = new DiscordClient(cl.token);
            clients.push(c);
            break;
        case 'MPP':
            c = new MPPClient(cl.uri, cl.channel, MPP_TOKEN);
            clients.push(c);
            break;
    }
    
    if (c) c.start();
}

// process.stdin.on('data', data => {
//     let str = data.toString().trim();
//     if (str === 'exit') {
//         process.exit();
//     }
//     let user = {
//         name: 'Hri7566',
//         id: 'ead',
//         _id: 'ead',
//         color: '#8d3f50'
//     }
//     let res = bot.receive(str, user);
//     console.log(res);
// });
