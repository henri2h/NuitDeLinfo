//TODO REMOVE
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const saltRound = 9;

// POST /api/user
// Required fields in body: firstname, lastname, email, password, chkPass
export default async function handle(req, res) {
  if (req.body.firstname && req.body.lastname && req.body.password && req.body.chkPass === req.body.password && req.body.email.match(regEmail)) {
    const result = await prisma.user.create({
      data: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, saltRound),
        powerLevel: 1
      },
    });

    res.json(result);
  } else {
    // Raise err
  }
}
