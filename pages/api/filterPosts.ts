//TODO REMOVE
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/filterPosts?searchString=:searchString
export default async function handle(req, res) {
  const { searchString } = req.query
  const resultPosts = {};
  res.json(resultPosts)
}
