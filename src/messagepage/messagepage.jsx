import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './message.css';
import { useNavigate } from 'react-router-dom';
import { messageEvent, MessageNotifier } from './messageNotifier';


export function Messagepage() {

  const userName = sessionStorage.getItem('userName');
  const receiver = sessionStorage.getItem('receiver');

  const [events, setEvent] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    MessageNotifier.addHandler(handleGameEvent);

    return () => {
      MessageNotifier.removeHandler(handleGameEvent);
    };
  });

  function handleGameEvent(event) {
    if (events.length > 11) {
      events.pop();
    }
    setEvent([event,...events]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      message = event.value;

      if (event.sender === receiver || event.receiver === userName || event.sender === userName || event.receiver === receiver) {
      messageArray.push(
        <span key={i}>
          <span style={{ color: 'blue',fontSize: '1em' }}>{event.sender}</span>: {event.value}
        </span>
      );
    }
  }
    return messageArray;
  }



  const handleExit = (event) => {
    event.preventDefault();
    navigate('/friendslist');
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const message = event.target[0].value;
    MessageNotifier.broadcastEvent(userName, receiver, message);
  }

  return (
    <main className="main-container">
      <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>{userName}</h3>
      <div id='player-messages'>{createMessageArray()}</div>
      <div className='message-stuff'>
      <span>Messaging {receiver}</span>
      <form  onSubmit={sendMessage}>
        <input type="text" name="message" placeholder="type a message" />
        <button className='submit-button' type="submit">Send</button>
      </form>
      <form className='exit-button' onSubmit={handleExit}>
        <button type="submit">Exit</button>
      </form>
      </div>
    </main>
  );
}
