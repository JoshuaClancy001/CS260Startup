import React from 'react';
import './friendslist.css'
import { useNavigate } from 'react-router-dom';

export function Friendslist() {

  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');


  const handleMessage = (event, name) => {
    event.preventDefault();
    localStorage.setItem('receiver', name);
    navigate('/messagepage');
  }


  const [streaks, setStreaks] = React.useState([]);
  const [receiver, setReceiver] = React.useState('');

  React.useEffect(() => {
    const streaksText = localStorage.getItem('streaks');
    if (streaksText) {
      setStreaks(JSON.parse(streaksText));
    }
  }, []);

  const sortedStreaks = [...streaks].sort((a, b) => b.streak - a.streak);


  const scoreRows = [];
  if (streaks.length) {
    for (const [i, score] of sortedStreaks.entries()) {
      if (score.name !== localStorage.getItem('userName')) {
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.streak}</td>
          <td>
          <form onSubmit={(event) => handleMessage(event, score.name)}>
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    color: 'black', 
                    backgroundColor: '#F991CC', 
                    borderColor: '#F991CC', 
                    justifyContent: 'center',
                    opacity: 0.8,
                  }}
                >
                  Message
                </button>
              </form>
          </td>
        </tr>
      );
    }
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }


  return (
    <main className="main-container-friends">
            <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>{userName}</h3>

      <h2 id="h2-scoreboard">UsersList</h2>
      
      <table 
        className="table table-warning table-striped-columns" 
        style={{ 
          backgroundColor: 'lightblue', 
          border: '1px solid lightgray', 
          width: '80%', 
          height: '60%', 
          fontFamily: 'Oleo Script, cursive', 
          fontSize: '2em' 
        }}
      >
        <thead className="table-dark" style={{ backgroundColor: 'lightgreen', opacity: 0.8 }}>
          <tr style={{ color: 'black' }}>
            <th >#</th>
            <th >Name</th>
            <th >Streak</th>
            <th >Message</th>
          </tr>
        </thead>
        <tbody>
          {scoreRows}
        </tbody>
      </table>
    </main>
  );
}