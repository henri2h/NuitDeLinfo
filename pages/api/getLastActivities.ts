import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle() {
    const post = await prisma.pratiques.findMany({
            
    })
    res.json(posts)
}
