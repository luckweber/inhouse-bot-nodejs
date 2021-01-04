import { Client } from 'discord.js'
import { readdirSync } from 'fs'

const path = require('path'); 

class InhouseBot {

    token:string
    client:Client = new Client()

    constructor(token:string) {
        this.token = token     
    }

    events() {

        const filesDir = path.resolve(__dirname, './events/')
        const evtFiles = readdirSync(filesDir)

        console.log('log', `Carregando o total de ${evtFiles.length} eventos`)

        for (const file of evtFiles) {
            const eventName = file.split('.')[0]
            let event = require(`./events/${file}`)
            event = event[`${eventName}`]
            this.client.on(eventName, event.bind(null, this.client))
        }
        

    }


    async run() {
        try {
            await this.client.login(this.token)
            await this.events()
        } catch (error) {
            console.debug(error)
        }
    }
}

export default InhouseBot