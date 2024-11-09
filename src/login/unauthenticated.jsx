import React from 'react';
import Form from 'react-bootstrap/Form';
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
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <main className="main-container-login">
  <h2 className="loginHeader">Login</h2>
  <Form onSubmit={handleEnter} className="login-form">
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
  </Form>
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
