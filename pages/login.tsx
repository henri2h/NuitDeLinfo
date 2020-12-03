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
		<div>
			<div className="page">
				<form onSubmit={submitData}>
					<h1>Log in</h1>
					<input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" value={email} />
					<input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />

					<input disabled={!email || !password} type="submit" value="Log in"/>
				</form>
			</div>
		</div>
	)
};

export default Login;
