"use strict";
exports.__esModule = true;
exports.envs = exports.result = exports.dotenv = void 0;
exports.dotenv = require('dotenv');
exports.result = exports.dotenv.config();
exports.envs = exports.result.parsed;
exports["default"] = {
    envs: exports.envs,
    dotenv: exports.dotenv,
    result: exports.result
};
