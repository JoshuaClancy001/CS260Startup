import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './message.css';
import { useNavigate } from 'react-router-dom';

export function Messagepage() {

  const userName = localStorage.getItem('userName');
  const receiver = localStorage.getItem('receiver');
  const navigate = useNavigate();

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/friendslist');
  };

  return (
    <main className="main-container">
      <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>{userName}</h3>

      <span>Messaging {receiver}</span>
      <form>
      <input type="text" placeholder="type a message" />
      </form>
      <button type="submi">Send</button>
      <form onSubmit={handleExit}>
        <button type="submit">Exit</button>
      </form>
    </main>
  );
}
