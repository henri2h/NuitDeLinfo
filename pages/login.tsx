import React, {useState} from 'react'
import Router from 'next/router'

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {
			const body = {email, password};
			const res = await fetch(`http://localhost:3000/api/auth`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			});
			const data = await res.json();
			Router.push('/');
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className="form-wrapper">
			<div className="page">
				<form onSubmit={submitData}>
					<h1>Log in</h1>
					<div>
						<input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" value={email} />
					</div>
					<div>
						<input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
					</div>

					<div>
						<input disabled={!email || !password} type="submit" value="Log in"/>
					</div>
				</form>
			</div>
			<style jsx>{`
				.form-wrapper {
					display: inline-block;
					width: 35vw;
					margin: auto;
					margin-top: 30vh;
					font-family: sans-serif;
					text-align: center;
				}
				input {
					margin-top: 50px;
				}
				input[type="text"], input[type="password"] {
					border: 2px solid #545454;
					border-radius: 3px;
					padding: 2px 5px;
					width: 300px;
					height: 32px;
					font-size: 1.1em;
				}
				input[type="submit"] {
					width: 150px;
					height: 40px;
					border: 2px solid #d4b658;
					background: transparent;
					color: #545454;
					transition: background 350ms ease;
					font-size: 1.2em;
				}
				input[type="submit"]:hover {
					background: #d4b658;
					color: #404040;
				}
			`}</style>
		</div>
	)
};

export default Login;
