import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';
import * from 'jsonwebtoken';

const prisma = new PrismaClient();
const saltRound = 9;

// TODO : must be imported process.env
const secretJWT = "SecretKeyToken";
const expireTime = '1 day';

// GET /api/login
// Required fields in body: email, password
export default async function handle(req, res) {
	if (req.body.email && req.body.password) {
		const result = await prisma.user.findUnique({
			where: {
				email: req.body.email
			}
		});

		if (result && bcrypt.hash(result.password, saltRound).then((hashed) => {return bcrypt.compare(hashed, result.password)})) {
			// Generate token
			const token = jwt.sign({ name: 'Someone' }, secretJWT, { expiresIn: expireTime });

		}

		res.json(result);
	} else {
		// Raise err
	}
}
