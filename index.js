var cors = require("cors");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");
var { welcomeResponse } = require("./controllers/welcomeResponse")
var { hobbySelect } = require("./controllers/hobbySelect");

const receiver = new ExpressReceiver({
    signingSecret: SIGNING_SECRET,
});

const app = new App({
    token: BOT_TOKEN,
    receiver
});

receiver.router.use(cors());

// receiver.router.post("/slack/events", index);

app.command("/bot", welcomeResponse);
app.action("static_select-action", hobbySelect);


(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();