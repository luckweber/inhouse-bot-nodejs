export const dotenv = require('dotenv');
export const result = dotenv.config();
export const { parsed: envs } = result;

export default {
    envs,
    dotenv,
    result
}