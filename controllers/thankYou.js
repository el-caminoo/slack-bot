var { PrismaClient } = require("@prisma/client")
var { feeling } = require("./hobbySelect");

const prisma = new PrismaClient();

let feeling = feeling;
let hobbies = []

var thankYou = async({body, ack, say}) => {
    await ack();

    let result = body.actions[0].selected_options
    result.map(r => {
        hobbies.push(r.text.text);
    });

    prisma.responses.create({
        data: {
            feeling: feeling,
            favourite_hobbies: hobbies
        }
    });

    say("Thank you");
};

module.exports = {
    thankYou: thankYou,
}