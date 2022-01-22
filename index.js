var express = require("express");
var cors = require("cors");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");
var { index }  = require("./routes/routes");

const receiver = new ExpressReceiver({
    signingSecret: SIGNING_SECRET,
});

const app = new App({
    token: BOT_TOKEN,
    receiver
});

receiver.router.use(cors());

receiver.router.use("/", index)

app.command("/bot ", async ({command, ack, say}) => {
    try {
        await ack();
        say("This command is active")
    }
    catch(error) {
        console.log(error);
    }
});

(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();