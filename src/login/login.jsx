import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'

export function Login() {

  const navigate = useNavigate();

  const handleEnter = (event) => {
    event.preventDefault();
    navigate('/logpage');
  };

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };

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
    <button type="submit" className="btn btn-primary"
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
  <form onSubmit={handleExit}>
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