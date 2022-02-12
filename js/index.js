const bot = require('./ffi');
bot.init();

process.stdin.on('data', data => {
    let str = data.toString().trim();
    if (str === 'exit') {
        process.exit();
    }
    bot.receive(str);
});

// console.log(bot.runCommand('help', {
//     name: 'hri7566',
//     _id: "6e7a8fbe618e0f8a7e821319",
//     color: "#9900ff"
// }));
