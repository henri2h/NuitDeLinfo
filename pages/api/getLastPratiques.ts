import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const { user_id_query, taille } = req.query
    const post = await prisma.pratiques.findMany({
        where: { user_id:  req.user_id_query },
        orderBy: { date: 'desc' },
        take: req.taille
    })
    res.json(posts)
}
