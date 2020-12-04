import React, {useState} from 'react'
import Router from 'next/router'

const SignUp: React.FC = () => {
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [chkPass, setChkPass] = useState('');

	const submitData = async (e: React.SyntheticEvent) => {
		e.preventDefault();
		try {

			const body = {firstname, lastname, email, password, chkPass};
			const res = await fetch(`http://localhost:3000/api/user`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(body),
			})
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
					<h1>Signup user</h1>
					<div>
						<input autoFocus onChange={e => setFirstname(e.target.value)} placeholder="Prénom" type="text" value={firstname}/>
					</div>
					<div>
						<input onChange={e => setLastname(e.target.value)} placeholder="Nom" type="text" value={lastname}/>
					</div>
					<div>
						<input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" value={email} />
					</div>
					<div>
						<input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
					</div>
					<div>
						<input onChange={e => setChkPass(e.target.value)} placeholder="Check password" type="password" value={chkPass} />
					</div>
					<div>
						<input disabled={!firstname || !lastname || !email || !password || password !== chkPass} type="submit" value="Signup"/>
					</div>
					<a className="back" href="#" onClick={() => Router.push('/')}>
						or Cancel
					</a>
				</form>
			</div>
			<style jsx>{`
      .page {
    			background: white;
    			padding: 3rem;
    			display: flex;
    			justify-content: center;
      }

     .form-wrapper {
			display: inline-block;
			width: 40vw;
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
			width: 400px;
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
}

export default SignUp;
