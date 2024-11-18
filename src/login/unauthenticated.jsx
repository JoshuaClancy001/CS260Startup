import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Unauthenticated(props) {

  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  
  const navigate = useNavigate();

  const handleEnter = (event) => {
    event.preventDefault();
    loginUser()
    navigate('/logpage');
  };

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ name: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200){
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    }
    else{
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <main className="main-container-login">
  <h2 className="loginHeader">Login</h2>
  <form onSubmit={handleEnter} className="login-form">
    <div className="mb-3">
      <label htmlFor="exampleInputUsername1" className="form-label" style={{ fontFamily: 'Oleo Script, cursive' }}>
        Username
      </label>
      <input type="username" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp"/>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label"
        style={{ fontFamily: 'Oleo Script, cursive' }}
      >
        Password
      </label>
      <input type="password" className="form-control" id="exampleInputPassword1"
        style={{ fontFamily: 'Oleo Script, cursive' }}
      />
    </div>
    <button className="btn btn-primary"
      style={{
        color: 'lightblue',
        backgroundColor: 'white',
        borderColor: 'white',
        fontFamily: 'Oleo Script, cursive',
      }}
    >
      Submit
    </button>
  </form>
  <br />
  <form >
    <button type="submit" id="ExitButton" className="btn btn-success"
      style={{
        backgroundColor: 'lightgreen',
        borderColor: 'lightgreen',
        opacity: 0.8,
        fontFamily: 'Oleo Script, cursive',
      }}
    >
      Exit
    </button>
  </form>
</main>
  );
}
