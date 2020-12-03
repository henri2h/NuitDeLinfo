import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookie from 'cookie'

const prisma = new PrismaClient();
const saltRound = 9;

// TODO : must be imported process.env
const secretJWT = "SecretKeyToken";
const expireTime = '1 day';

// POST /api/auth
// Required fields in body: email, password
export default async function handle(req, res) {
	if (req.body.email && req.body.password) {
		const result = await prisma.user.findUnique({
			where: {
				email: req.body.email
			}
		});

		if (result && bcrypt.hash(req.body.password, saltRound).then((hashed) => {return bcrypt.compare(hashed, result.password)})) {
			// Generate token
			const token = jwt.sign({ name: 'Someone' }, secretJWT, { expiresIn: expireTime });
			res.setHeader('Set-Cookie', cookie.serialize('token', token, {
				maxAge: 60 * 60 * 24,
				httpOnly: true
			}));
		}

		res.json(result);
	} else {
		// Raise err
	}
}
