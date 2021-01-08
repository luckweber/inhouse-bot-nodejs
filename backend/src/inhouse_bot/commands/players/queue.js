const { Command, } = require('discord.js-commando');

const ROLES = ['mid', 'top', 'jg', 'sup']


module.exports = class QueueCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'queue',
			group: 'players',
			memberName: 'queue',
            description: 'Replies with a meow, kitty cat.',
            argsType:'multiple',
            args: [
                {
                    key: 'role',
                    prompt: 'Is what your Role?',
                    type: 'string',
                    validate: text => ROLES.includes(text),
                    error: 'Role invalid'
                },
                {
                    key: 'nickDuo',
                    prompt: 'Is what Nick Duo?',
                    type: 'member',
                    error: 'Nick Duo invalid',
                },
                {
                    key: 'roleDuo',
                    prompt: 'Is what your Role Duo?',
                    type: 'string',
                    validate: text => ROLES.includes(text),
                    error: 'Role do Duo invalid',
                 },
            ],
		});
	}

	run(message, args) {
        console.log(args);
		return message.say('Meow!');
    }
};