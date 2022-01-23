var { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var getData = async (req, res) => {
    let response = await prisma.response.findMany();
    res.send(response);
}

module.exports = {
    getData: getData,
}