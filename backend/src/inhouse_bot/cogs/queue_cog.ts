import { construct } from "ramda"

class QueueCog {

    bot = null

    constructor(bot:any) {
        this.bot = bot

        console.log('====================================');
        console.log(bot);
        console.log('====================================');
    }
}

export default QueueCog