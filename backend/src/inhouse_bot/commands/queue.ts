const ROLES = ['top', 'jungle', 'mid', 'adc', 'sup']
import {isEmpty} from 'ramda'


export const queue = async (client:any, message:any, args:any) => {

    const user = message.author
    const users_duo_size = message.mentions.users.size
    const users_duo = message.mentions.users

    if(users_duo_size) return queue_duo(user, users_duo, args)
    else return queue_solo(user, args, message)
    
}

const queue_solo = (user:any, args:any, message:any) => {

    if(isEmpty(args)) return message.channel.send(`Role not included`)
    
    args = args[0]
    if(!ROLES.includes(args)) return message.channel.send(`Invalid Role`)

    
    
    return message.channel.send(`You are included in the Queue`)
} 

const queue_duo = (user:any, users:any, args:any) => {
    
    
} 