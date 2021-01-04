import InhouseBot from "./inhouse_bot"
import {envs} from "./config"

const bot = new InhouseBot(envs.TOKEN)
bot.run()