const { Client } = require('./Client');

const Discord = require('discord.js');
import { TextChannel } from "discord.js";

class DiscordClient extends Client {
    latestChannel: TextChannel;
    constructor () {
        let cl = new Discord.Client({
            intents: [
                'GUILDS',
                'GUILD_MEMBERS',
                'GUILD_MESSAGES',
                'GUILD_MESSAGE_REACTIONS',
                'DIRECT_MESSAGES',
                'DIRECT_MESSAGE_REACTIONS'
            ]
        });

        super('discord', cl, 'Discord');

        this.cl = cl;
    }

    start(token: string) {
        this.cl.on('message', (msg: any) => {
            // TODO handle user conversion
            (globalThis as any).bot.receive(msg.message);
        });

        this.cl.login(token);
    }

    sendChat(message: string) {

    }
}

module.exports = {
    DiscordClient
}
