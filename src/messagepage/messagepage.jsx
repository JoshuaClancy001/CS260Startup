import React from 'react';
import './message.css';
import { useNavigate } from 'react-router-dom';

export function Messagepage() {

  const receiver = localStorage.getItem('receiver');

  const navigate = useNavigate();

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/friendslist');
  };

  return (
    <main className="main-container">
    <span>Messaging {receiver}</span>
    <input type="text" placeholder="type a message" />
    <button type="submit">Send</button>
    <form onSubmit={handleExit}>
        <button type="submit">Exit</button>
    </form>
</main>

  );
}