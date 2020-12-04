import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const { user_id_query } = req.query
    const post = await prisma.pratiques.findMany({
        where: {
            id: req.user_id_query
        }
    })
    res.json(post)
}
