var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

var thankYou = async({body, ack, say}) => {
    await ack();
    say("Thank you");

    let hobbies = []
    let result = body.actions[0].selected_options 
    let userID = body.user.id 

    result.map(r => {
        hobbies.push(r.text.text);
    });

    await prisma.response.update({
        where: {id: userID},
        data: {favourite_hobbies: hobbies}
    })
    .catch(err => {
        console.log(err);
    });
};

module.exports = {
    thankYou: thankYou,
}


