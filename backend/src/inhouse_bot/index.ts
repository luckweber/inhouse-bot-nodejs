// import { Client } from 'discord.js'
import {CommandoClient}  from 'discord.js-commando'

const path = require('path'); 

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
        console.log(`Logged in as ${this.channels.client.user?.tag}! (${this.channels.client.user?.id})`)
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