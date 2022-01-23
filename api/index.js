var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()


var getData = async (req, res) => {
    res.send('response');
}

module.exports = {
    getData: getData
}