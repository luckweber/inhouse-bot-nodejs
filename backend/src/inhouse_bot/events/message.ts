export const message = async (client:any, message:any) => {
    
    if(message.author.bot) return
    
    console.log(message.channel.id);
    console.log(message.guild.roles);
    
    
}