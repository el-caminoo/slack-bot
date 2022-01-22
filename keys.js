require("dotenv").config();

module.exports = {
    PORT: process.env.PORT,
    SIGNING_SECRET: process.env.SLACK_SIGNING_SECRET,
    BOT_TOKEN: process.env.SLACK_BOT_TOKEN
}