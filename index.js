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
        say("Welcome. How are you doing? \n");
        say({
            "type": "home",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "Pick an item from the dropdown list"
                    },
                    "accessory": {
                        "type": "static_select",
                        "placeholder": {
                            "type": "plain_text",
                            "text": "Select an item",
                            "emoji": true
                        },
                        "options": [
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "*this is plain_text text*",
                                    "emoji": true
                                },
                                "value": "value-0"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "*this is plain_text text*",
                                    "emoji": true
                                },
                                "value": "value-1"
                            },
                            {
                                "text": {
                                    "type": "plain_text",
                                    "text": "*this is plain_text text*",
                                    "emoji": true
                                },
                                "value": "value-2"
                            }
                        ],
                        "action_id": "static_select-action"
                    }
                }
            ]
        })
    }
    catch(err) {
        console.log(err);
    }
});


(async () => {
    await app.start(PORT);
    console.log(`server is up at ${PORT}`);
})();