"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./discord/client");
(async () => {
    const discord = new client_1.default();
    await discord.connect();
    console.log('====================================');
    console.log("doddo");
    console.log('====================================');
    // discord.registerCommand(TopCommand);
})();
//# sourceMappingURL=index.js.map