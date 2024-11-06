import React from 'react';
import './friendslist.css'

export function Friendslist() {
  return (
    <main className="main-container-friends">
      <h2 id="h2-scoreboard">FriendsList</h2>
      
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
          <tr>
            <td >1</td>
            <td >Jonathan</td>
            <td >4</td>
            <td >
              <form method="get" action="message.html">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    color: 'black', 
                    backgroundColor: '#F991CC', 
                    borderColor: '#F991CC' 
                  }}
                >
                  Message
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td >2</td>
            <td >Emily</td>
            <td >2</td>
            <td >
              <form method="get" action="message.html">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    color: 'black', 
                    backgroundColor: '#F991CC', 
                    borderColor: '#F991CC' 
                  }}
                >
                  Message
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td >3</td>
            <td >Nathan</td>
            <td >1</td>
            <td >
              <form method="get" action="message.html">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    color: 'black', 
                    backgroundColor: '#F991CC', 
                    borderColor: '#F991CC' 
                  }}
                >
                  Message
                </button>
              </form>
            </td>
          </tr>
          <tr>
            <td >4</td>
            <td >Hannah</td>
            <td >0</td>
            <td >
              <form method="get" action="message.html">
                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ 
                    color: 'black', 
                    backgroundColor: '#F991CC', 
                    borderColor: '#F991CC' 
                  }}
                >
                  Message
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>

      <form method="get" action="index.html">
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