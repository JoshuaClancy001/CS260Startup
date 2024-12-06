import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './message.css';
import { useNavigate } from 'react-router-dom';
import { messageEvent, EventMessage, MessageNotifier } from './messageNotifier';
import e from 'express';

export function Messagepage() {

  const userName = localStorage.getItem('userName');
  const receiver = localStorage.getItem('receiver');
  const message = React.useState('')
  const [events, setEvent] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === GameEvent.End) {
        message = `scored ${event.value.score}`;
      } else if (event.type === GameEvent.Start) {
        message = `started a new game`;
      } else if (event.type === GameEvent.System) {
        message = event.value.msg;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }



  const handleExit = (event) => {
    event.preventDefault();
    navigate('/friendslist');
  };

  const sendMessgage = (event) => {
    event.preventDefault();
    const message = event.target[0].value;
    const eventMessage = new EventMessage(userName, receiver, message);
    MessageNotifier.broadcastEvent(eventMessage);
  }

  return (
    <main className="main-container">
      <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>{userName}</h3>
      
      <span>Messaging {receiver}</span>
      <form onSubmit={sendMessgage}>
      <input type="text" placeholder="type a message" />
      </form>
      <button type="submi">Send</button>
      <form onSubmit={handleExit}>
        <button type="submit">Exit</button>
      </form>
    </main>
  );
}
