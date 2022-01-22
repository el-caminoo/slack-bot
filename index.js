var cors = require("cors");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");
var { dropdown } = require("./modals");
// var { index } = require("./routes/routes");

const receiver = new ExpressReceiver({
    signingSecret: SIGNING_SECRET,
});

const app = new App({
    token: BOT_TOKEN,
    receiver
});

receiver.router.use(cors());

// receiver.router.post("/slack/events", index);

app.command("/bot", async({ command, ack, say}) => {
    try {
        await ack();
        say(
            {
                "type": "modal",
                "blocks": [
                    {
                        "type": "input",
                        "element": {
                            "type": "plain_text_input"
                        },
                        "label": {
                            "type": "plain_text",
                            "text": "Label",
                            "emoji": true
                        },
                        "title": {
                            "type": "plain_text",
                            "text": "Add info to feedback",
                            "emoji": true
                        },
                        "submit": {
                            "type": "plain_text",
                            "text": "Save",
                            "emoji": true
                        },
                    }
                ]
            }
        );
    }
    catch(err) {
        console.log(err);
    }
});


(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();