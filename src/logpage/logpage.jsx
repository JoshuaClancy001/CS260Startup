import React from 'react';
import { useNavigate } from 'react-router-dom';
import './logpage.css'

export function Logpage() {

  const navigate = useNavigate();

  const handleGoogleDriveConnect = (event) => {
    event.preventDefault();
    navigate('/googledrive');
  };

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  const currentDayIndex = new Date().getDay();

  return (
    <main className="main-container-logpage">
  <h3 className="display-username">JJC123</h3>

  <div className="streak-and-g-drive">
    <h3 className="streak-element">Streak → 3</h3>
    <form className="google-drive-button" onSubmit={handleGoogleDriveConnect}>
      Google Drive
      <button id="google-drive-button" type="submit" className="btn btn-primary" style={{ backgroundColor: 'lightblue', borderColor: 'lightblue' }}>Connect</button>
    </form>
  </div>

  <div className="timesheet">
    <h2 style={{ textDecoration: 'underline' }}>Timesheet</h2>
    <table id="ID1" className="table table-warning table-striped-columns"
    style={{
      backgroundColor: 'lightgreen !important',
      border: '1px solid lightgray',
      width: '40%',
      fontFamily: 'Oleo Script, cursive',
      fontSize: '1em'
    }}>
      <thead className="table-dark">
        <tr>
          <th style={{ border: '1px solid black' }}>Day</th>
          <th style={{ border: '1px solid black' }}>Practice Time</th>
        </tr>
      </thead>
      <tbody>
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day,index) => (
          <tr key={day}>
            <td style={{ border: '1px solid black' }}>{day}</td>
            <td style={{ border: '1px solid black' }}>
              <select disabled={index !== currentDayIndex}>
                <option value="0">0 minutes</option>
                <option value="15">15 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="60+">60+ minutes</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</main>

  );
}