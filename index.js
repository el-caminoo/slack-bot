var cors = require("cors");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");
var { welcomeResponse } = require("./controllers/welcomeResponse");
var { hobbySelect } = require("./controllers/hobbySelect");
var { thankYou } = require("./controllers/thankYou");

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
app.action("multi_static_select-action", thankYou);

(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();