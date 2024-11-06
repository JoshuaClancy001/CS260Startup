import React from 'react';
import { useNavigate } from 'react-router-dom';
import './scoreboardpage.css';

export function Scoreboard() {
  const navigate = useNavigate();

    const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };
  return (
    <main className="main-container-scoreboard">
      <h3 className="display-username" style={{ fontFamily: 'Oleo Script, cursive' }}>JJC123</h3>
      <h2 id="h2-scoreboard">Scoreboard</h2>
      
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
        <thead className="table-dark">
          <tr style={{ color: 'black' }}>
            <th>#</th>
            <th>Name</th>
            <th>Streak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Jonathan</td>
            <td>4</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Emily</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nathan</td>
            <td>1</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Hannah</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>

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
