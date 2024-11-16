import React from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthState } from '../login/authState';
import './register.css'

export function Register(props) {

  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState(props.password);
  const [token, setToken] = React.useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  const handleEnter = (event) => {
    event.preventDefault();
    loginOrCreate(`/api/auth/create`);
  };

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ name: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200){
      const body = await response.json();
      localStorage.setItem('userName', userName);
      localStorage.setItem('token', body.token);
      setToken(body.token);
      props.onAuthChange(userName, AuthState.Authenticated);
      navigate('/logpage');
      response.token
    }
    else{
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <main className="main-container-register">
  <h2>Create an Account</h2>
  <Form onSubmit={handleEnter} className="login-form">
    <div className="mb-3">
      <label htmlFor="exampleInputUsername1" className="form-label" 
      style={{ fontFamily: 'Oleo Script, cursive' }}>Username
      </label>
      <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" onChange={(e)=>setUserName(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" 
      style={{ fontFamily: 'Oleo Script, cursive' }}>
        Password
      </label>
      <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label" 
      style={{ fontFamily: 'Oleo Script, cursive' }}>
        Email
        </label>
      <input type="email" className="form-control" id="exampleInputEmail1" />
    </div>
    <button type="submit" className="btn btn-primary" style={{ color: 'lightblue', backgroundColor: 'white', borderColor: 'white', fontFamily: 'Oleo Script, cursive' }}>Submit</button>
  </Form>
  <br />
  <form onSubmit={handleExit}>
    <button type="submit" className="btn btn-success" 
    style={{ backgroundColor: 'lightgreen', borderColor: 'lightgreen', opacity: 0.8, fontFamily: 'Oleo Script, cursive' }}>
      Exit
      </button>
  </form>
</main>

  );
}