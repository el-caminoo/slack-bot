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

receiver.router.get("/", (req, res) => {
    res.send("working")
});

(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();