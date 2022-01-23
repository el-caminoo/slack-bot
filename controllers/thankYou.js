var { feeling }  = require("./hobbySelect");
var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()

let hobbies = []

var thankYou = async({body, ack, say}) => {

    await ack();
    say("Thank you");

    let result = body.actions[0].selected_options
    result.map(r => {
        hobbies.push(r.text.text);
    });

    async () => {
        await prisma.responses.create({
            data: {
                feeling: feeling,
                favourite_hobbies: hobbies
            }
        });
    }
};

module.exports = {
    thankYou: thankYou,
}
