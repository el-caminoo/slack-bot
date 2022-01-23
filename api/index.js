var { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient()


var getData = async (req, res) => {
    let response = await prisma.responses.findMany();
    res.send(response);
}

module.exports = {
    getData: getData
}