var cors = require("cors");
var { App, ExpressReceiver } = require("@slack/bolt");
var { PORT, SIGNING_SECRET, BOT_TOKEN } = require("./keys");
// var { dropdown } = require("./modals");
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

app.command("/bot", async({ command, ack, say, respond}) => {
    try {
        await ack();
        respond("Welcome, How are you doing?");
        say(
            [
                {
                  "type": "section",
                  "block_id": "section678",
                  "text": {
                    "type": "mrkdwn",
                    "text": "Pick an item from the dropdown list"
                  },
                  "accessory": {
                    "action_id": "text1234",
                    "type": "static_select",
                    "placeholder": {
                      "type": "plain_text",
                      "text": "Select an item"
                    },
                    "options": [
                      {
                        "text": {
                          "type": "plain_text",
                          "text": "*this is plain_text text*"
                        },
                        "value": "value-0"
                      },
                      {
                        "text": {
                          "type": "plain_text",
                          "text": "*this is plain_text text*"
                        },
                        "value": "value-1"
                      },
                      {
                        "text": {
                          "type": "plain_text",
                          "text": "*this is plain_text text*"
                        },
                        "value": "value-2"
                      }
                    ]
                  }
                }
            ]
            
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