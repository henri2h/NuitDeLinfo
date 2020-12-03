import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const post = await prisma.pratiques.findMany({
        where: { user_id:  req.user_id }
    })
    res.json(posts)
}
