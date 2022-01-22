var cors = require("cors");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");

const receiver = new ExpressReceiver({
    signingSecret: SIGNING_SECRET,
});

const app = new App({
    token: BOT_TOKEN,
    receiver
});

receiver.router.use(cors());

receiver.router.post("/slack/events", async (req, res) => {
    var response = await req.body.challenge;
    res.send(response);
});

app.command("/bot", async({ command, ack, say}) => {
    try {
        await ack();
        say("Command is active");
    }
    catch(err) {
        console.log(err);
    }
});

(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();