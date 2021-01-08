import {CommandoClient}  from 'discord.js-commando'
import { TEXT } from 'sequelize';
import { Sequelize, STRING } from "sequelize";

const path = require('path'); 

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './storage/database.sqlite'
});

const Tags = sequelize.define('tags', {
	name: {
		type: STRING,
		unique: true,
	},
	description: TEXT,
	username: STRING,
	usage_count: {
		type: STRING,
		defaultValue: 0,
		allowNull: false,
	},
})

class InhouseBot extends CommandoClient{

    code:string

    constructor(token:string) {

        super()

        this.commandPrefix = "!"
        this.code = token

        this.register()
        this.on('ready', this.on_ready)  
    
    }

    

    register = () => {
        this.registry
            .registerDefaultTypes()
            .registerGroups([
                ['players', 'Command Group to players']
            ])
            .registerDefaultGroups()
            .registerDefaultCommands()
            .registerCommandsIn(path.join(__dirname, './commands/'));
    }


    on_ready = () => {
        try {
            console.log(`Logged in as ${this.channels.client.user?.tag}! (${this.channels.client.user?.id})`)
            Tags.sync();
        } catch (error) {
         console.log(error);
            
        }
    };


    async run() {
        try {
            await this.login(this.code)
        } catch (error) {
            console.log(error);
        }
    }
}

export default InhouseBot