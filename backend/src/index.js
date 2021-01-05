"use strict";
exports.__esModule = true;
var inhouse_bot_1 = require("./inhouse_bot");
var config_1 = require("./config");
var bot = new inhouse_bot_1["default"](config_1.envs.TOKEN);
bot.run();
