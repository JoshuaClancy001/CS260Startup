import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './scoreboardpage.css';

export function Scoreboard() {

  const [streaks, setStreaks] = React.useState([]);

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
      
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.streak}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  const navigate = useNavigate();

    const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };
  return (
    <main className="main-container-scoreboard">
      <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>JJC123</h3>
      <h2 id="h2-scoreboard">Scoreboard</h2>
      
      <Table 
        className="table table-warning table-striped-columns" 
        style={{ 
          backgroundColor: 'lightgreen !important',
          border: '1px solid lightgray', 
          width: '80%', 
          height: '60%', 
          fontFamily: 'Oleo Script, cursive', 
          fontSize: '2em' 
        }}
      >
        <thead className="table-dark">
          <tr style={{ color: 'black', backgroundColor: 'lightblue' }}>
            <th>#</th>
            <th>Name</th>
            <th>Streak</th>
          </tr>
        </thead >
        <tbody>
          {scoreRows}
        </tbody>
      </Table>

      <form onSubmit={handleExit}>
        <button 
          type="submit" 
          className="btn btn-success" 
          style={{ 
            backgroundColor: 'lightgreen', 
            borderColor: 'lightgreen', 
            opacity: 0.8, 
            fontFamily: 'Oleo Script, cursive' 
          }}
        >
          Exit
        </button>
      </form>
    </main>
  );
}
