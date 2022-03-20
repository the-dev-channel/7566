const { Client } = require('./Client');

const MPP = require('./MPP/Client');

class MPPClient extends Client {
    channel: string;

    constructor (uri: string, channel: string, token?: string) {
        let cl = new MPP(uri, token || undefined);

        super('discord', cl, 'MPP');

        this.cl = cl;
        this.channel = channel;
    }

    start() {
        this.cl.start();

        this.cl.on('a', (msg: any) => {
            (globalThis as any).bot.slog(`${msg.p.name}: ${msg.a}`);
            if (!msg.a.startsWith('.') && msg.p.name !== '[discord.gg/k44Eqha]') return;
            if (msg.p.name == '[discord.gg/k44Eqha]' && msg.a.split(' ')[1] !== '.') return;
            if (msg.p.name !== '[discord.gg/k44Eqha]') {
                msg.a = msg.a.substring(1);
            } else {
                msg.a = msg.a.substring(msg.a.indexOf(' ') + 1);
            }
            console.log(msg.a);
            let res = (globalThis as any).bot.receive(msg.a, msg.p);
            this.sendChat(res);
        });

        this.cl.on('hi', (msg: any) => {
            (globalThis as any).bot.slog(`Connected to ${this.channel} (_id: ${msg.u._id})`);
        });

        this.cl.setChannel(this.channel);
    }

    sendChat(message: string) {
        this.cl.sendArray([{
            m: "a",
            message: `\u034f${message}`
        }]);
    }
}

module.exports = {
    MPPClient
}
