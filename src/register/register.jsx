import React from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'

export function Register() {

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
    <main className="main-container-register">
  <h2>Create an Account</h2>
  <form onSubmit={handleEnter} className="login-form">
    <div className="mb-3">
      <label htmlFor="exampleInputUsername1" className="form-label" 
      style={{ fontFamily: 'Oleo Script, cursive' }}>Username
      </label>
      <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label" 
      style={{ fontFamily: 'Oleo Script, cursive' }}>
        Password
      </label>
      <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label" 
      style={{ fontFamily: 'Oleo Script, cursive' }}>
        Email
        </label>
      <input type="email" className="form-control" id="exampleInputEmail1" />
    </div>
    <button type="submit" className="btn btn-primary" style={{ color: 'lightblue', backgroundColor: 'white', borderColor: 'white', fontFamily: 'Oleo Script, cursive' }}>Submit</button>
  </form>
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