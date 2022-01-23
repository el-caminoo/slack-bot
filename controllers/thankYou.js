// var { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient()

var thankYou = async({body, ack, say}) => {
    await ack();
    say("Thank you");

    // let result = body.actions[0].selected_options
    // result.map(r => {
    //     hobbies.push(r.text.text);
    // });
};

module.exports = {
    thankYou: thankYou,
}
