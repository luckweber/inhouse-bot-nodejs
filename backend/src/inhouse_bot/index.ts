import { Client } from 'discord.js'
import QueueCog from './cogs/queue_cog';

const path = require('path'); 

class InhouseBot extends Client {

    token:string
    client:Client = new Client()
    cogs:any = []

    constructor(token:string) {
        super()
        this.token = token  
        
        // Importing locally to allow InhouseBot to be imported in the cogs
        this.add_cog(new QueueCog(this))


        // Setting up the on_message listener that will handle queue channels
        this.add_listener(() => {console.log("kdkk")}, 'message')

        this.add_listener(() => {console.log("11111")}, 'command')

        // Setting up the on_ready listener that will handle queue channels
        this.add_listener(this.on_ready, 'ready')


    }

    add_listener = (callback:any, name:string) => this.on(name, callback)

    add_cog = (cog:any) =>  this.cogs.push(cog)

    on_ready = (ctx:any) => {
        console.log(`${this.user?.username} has connected to Discord`)
    }


    async run() {
        try {
            await this.login(this.token)
        } catch (error) {
            console.debug(error)
        }
    }
}

export default InhouseBot