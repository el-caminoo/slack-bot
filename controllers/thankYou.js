
var thankYou = async({ack, say}) => {
    await ack();
    say("Thank you");
};

module.exports = {
    thankYou: thankYou,
}



    // let result = body.actions[0].selected_options
    // result.map(r => {
    //     hobbies.push(r.text.text);
    // });