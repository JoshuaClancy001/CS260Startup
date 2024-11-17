import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import './scoreboardpage.css';

export function Scoreboard() {

  const [streaks, setStreaks] = React.useState([]);
  const userName = localStorage.getItem('userName');

  React.useEffect(() => {
    
    async function fetchStreaks() {
      const response = await fetch('/api/streaks', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
      });
      if (response?.status === 200) {
        const updatedStreaks = await response.json();
        setStreaks(updatedStreaks);
      }
    }

    fetchStreaks();
  }, []);

  const sortedStreaks = [...streaks].sort((a, b) => b.streak - a.streak);


  const scoreRows = [];
  if (streaks.length) {
    for (const [i, score] of sortedStreaks.entries()) {
      
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
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
      <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>{userName}</h3>
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

      
    </main>
  );
}
