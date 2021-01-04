import { readdirSync } from "fs";
import {envs} from "./../../config"
const path = require('path'); 


export const message = async (client:any, message:any) => {
    
    if(message.author.bot) return

    if (message.content.indexOf(envs.PREFIX) !== 0) return

    const args = message.content.slice(envs.PREFIX.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    const filesDir = path.resolve(__dirname, './../commands/')
    const evtFiles = readdirSync(filesDir)

    const file = evtFiles.find((name) => name.split('.')[0] == command)   
    
    if(file) {

        const eventName = file.split('.')[0]
        let fileCommand =  `${filesDir}/${file}`
        let command = require(fileCommand)
        
        command = command[`${eventName}`]
        command(client, message, args)
        

    }else {
        message.channel.send(`Command ${command} invalid`)
    }
    
}