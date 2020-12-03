import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
    const result = await prisma.pratiques({
        data: {
            ...req.body,
        },
    })
    res.json(result)
}