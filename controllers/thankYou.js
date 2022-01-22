let hobbies = []

var thankYou = async({body, ack, say}) => {
    await ack();

    let result = body.actions[0].selected_options
    result.map(r => {
        hobbies.push(r.text.text);
    });
    say(`${hobbies[0]} and ${hobbies[1]}`)
    say("Thank you");
};

module.exports = {
    thankYou: thankYou,
}
