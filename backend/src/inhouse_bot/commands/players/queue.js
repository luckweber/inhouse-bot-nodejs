const { Command } = require('discord.js-commando');


module.exports = class QueueCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'queue',
			group: 'players',
			memberName: 'queue',
            description: 'Replies with a meow, kitty cat.',
            args: [
                {
                    key: 'text',
                    prompt: 'Is what your Role?',
                    type: 'string',
                },
            ],
		});
	}

	run(message) {
		return message.say('Meow!');
    }
};