import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

export function Home() {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/register');
  };

//   const handleRegister = (event) => {
//     event.preventDefault();
//     navigate('/register');
//   };
  return (
    <main className="main-container-home">
      <div className="left-column">
        <div className="image-container">
          <img
            id="guitar-picture"
            src="/guitarimage.png"
            alt="Picture of a guitar"
            width="200"
          />
        </div>
        <img
          id="piano-picture"
          src="/pianoimage.jpeg"
          alt="Picture of a piano"
          width="200"
        />
      </div>
      <div className="right-column">
        <h2
          className="right-col-h2"
          style={{ textAlign: 'center' }}
        >
          Login or Register a new Account
        </h2>
        <div className="login-register-buttons">
          <form onSubmit={handleLogin}>
            <button
              type="submit"
              className="btn btn-info"
              style={{
                backgroundColor: 'lightblue',
                borderColor: 'lightblue',
                opacity: 1,
              }}
            >
              Login
            </button>
          </form>
          <br />
          <form onSubmit={handleRegister}>
            <button
              type="submit"
              className="btn btn-success"
              style={{
                backgroundColor: 'lightgreen',
                borderColor: 'lightgreen',
                opacity: 0.8,
              }}
            >
              Register
            </button>
          </form>
        </div>
        <br />
      </div>
    </main>
  );
}
