var express = require("express");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");

// const receiver = new ExpressReceiver({
//     signingSecret: SIGNING_SECRET
// });

const app = new App({
    token: BOT_TOKEN,
    signingSecret: SIGNING_SECRET
});

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

// app.router.get

// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));