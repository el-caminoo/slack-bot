
var thankYou = async({ack, say}) => {
    await ack();
    say("Thank you");
};

module.exports = {
    thankYou: thankYou
}