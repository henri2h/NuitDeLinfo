import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const user = await prisma.user.findOne({
        where: {firstname: req.firstname,
                lastname: req.lastname} // ???
    })
    res.json(user)
}
