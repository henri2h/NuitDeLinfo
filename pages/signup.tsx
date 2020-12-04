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
            <input autoFocus onChange={e => setFirstname(e.target.value)} placeholder="Prénom" type="text" value={firstname}/>
            <input onChange={e => setLastname(e.target.value)} placeholder="Nom" type="text" value={lastname}/>
            <input onChange={e => setEmail(e.target.value)} placeholder="Email" type="text" value={email} />
            <input onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" value={password} />
            <input onChange={e => setChkPass(e.target.value)} placeholder="Check password" type="password" value={chkPass} />

            <input disabled={!firstname || !lastname || !email || !password || password !== chkPass} type="submit" value="Signup"/>

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

      input[type='text'] {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 0.25rem;
        border: 0.125rem solid rgba(0, 0, 0, 0.2);
      }

      input[type='submit'] {
        background: #ececec;
        border: 0;
        padding: 1rem 2rem;
      }

      .back {
        margin-left: 1rem;
      }
    `}</style>
      </div>
  )
}

export default SignUp;
