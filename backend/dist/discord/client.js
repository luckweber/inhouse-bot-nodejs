"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const discord_js_1 = require("discord.js");
const TOKEN = 'NzkyOTAxNDg3MzgxOTcwOTg2.X-kdDQ.Kkt0AwbVJe4TJKq4q44tdvIp3Pc';
const CLIENT_ID = '792901487381970986';
const PREFIX = '!';
const querystring = require('querystring');
class DiscordClient {
    constructor() {
        this.bot = new discord_js_1.Client();
        this.commands = [];
    }
    registerCommand(cmd) {
        this.commands.push(cmd);
    }
    async connect() {
        this.bot.login(TOKEN);
        this.bot.on("ready", () => {
            console.log("Connected to discord as %s (%s)", this.bot.user.username, this.bot.user.id);
            // this.registerSlashCommands();
        });
        this.bot.on("message", this.messageCreate);
        this.bot.on("unknown", async (packet, id) => {
            if (packet.t === "INTERACTION_CREATE") {
                const d = packet.d;
                console.log(d);
            }
        });
        this.bot.on("error", (e) => {
            console.log("Eris encountered error, attempting to reconnect: %O", e);
        });
    }
    async messageCreate(message) {
        console.log('====================================');
        console.log(message.channel);
        console.log('====================================');
    }
    async handleMessage(message) {
        if (message.content.startsWith(PREFIX)) {
            const input = message.content.slice(PREFIX.length).trim().split(' ');
            const command = input.shift();
            const commandArgs = input.join(' ');
            if (command === 'queue') {
                const exampleEmbed = new discord_js_1.MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle('Some title')
                    .setURL('https://discord.js.org/')
                    .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                    .setDescription('Some description here')
                    .setThumbnail('https://i.imgur.com/wSTFkRM.png')
                    .addFields({ name: 'Regular field title', value: 'Some value here' }, { name: '\u200B', value: '\u200B' }, { name: 'Inline field title', value: 'Some value here', inline: true }, { name: 'Inline field title', value: 'Some value here', inline: true })
                    .addField('Inline field title', 'Some value here', true)
                    .setImage('https://i.imgur.com/wSTFkRM.png')
                    .setTimestamp()
                    .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
                message.channel.send(exampleEmbed);
            }
            if (command === 'urban') {
                if (!commandArgs.length) {
                    return message.channel.send('You need to supply a search term!');
                }
                const query = querystring.stringify({ term: commandArgs });
                const { data } = await axios_1.default.get(`https://reqres.in/api/users?page=?${query}`);
                if (!data.data.length) {
                    return message.channel.send(`No results found for **${commandArgs}**.`);
                }
                else {
                    message.channel.send(data.data[0].email);
                }
            }
        }
        // message.react('👍').then(() => message.react('👎'));
        // const filter = (reaction:any, user:any) => {
        //     return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        // };
        // message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        // .then((collected:any) => {
        //     const reaction = collected.first();
        //     if (reaction.emoji.name === '👍') {
        //         message.reply('you reacted with a thumbs up.');
        //     } else {
        //         message.reply('you reacted with a thumbs down.');
        //     }
        // })
        // .catch((collected:any) => {
        //     message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
        // });
    }
    async registerSlashCommands() {
        const url = `https://discord.com/api/v8/applications/${CLIENT_ID}/commands`;
        const json = {
            "name": "queue",
            "description": "Entra na queue do lobby",
            "options": [
                {
                    "name": "role",
                    "description": "Escolha sua role",
                    "type": 3,
                    "required": true,
                    "choices": [
                        {
                            "name": "Top",
                            "value": "queue_top"
                        },
                        {
                            "name": "Jungle",
                            "value": "queue_jungle"
                        },
                        {
                            "name": "Mid",
                            "value": "queue_mid"
                        },
                        {
                            "name": "Bot",
                            "value": "queue_botlane"
                        },
                        {
                            "name": "Support",
                            "value": "queue_support"
                        }
                    ]
                },
            ]
        };
        try {
            await axios_1.default(url, {
                method: "POST",
                headers: {
                    Authorization: `Bot ${TOKEN}`,
                    "Content-Type": "application/json"
                },
                data: JSON.stringify(json)
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = DiscordClient;
//# sourceMappingURL=client.js.map