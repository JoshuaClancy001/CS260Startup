import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './logpage.css';

export function Logpage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [practiceTimes, setPracticeTimes] = useState(Array(7).fill("0"));
  const [userStreak, setUserStreak] = useState(0);  // Default streak to 0 initially
  const [prevSat, setPrevSat] = useState(Boolean(localStorage.getItem("prevSat")) || false);
  const currentDayIndex = new Date().getDay();
  // UseEffect to load or create streak when component mounts
  useEffect(() => {
    // Retrieve the streaks array from localStorage
    const streaksText = localStorage.getItem('streaks');
    let streaks = streaksText ? JSON.parse(streaksText) : [];

    // Try to find the current user's streak from the list
    let currentUserStreak = streaks.find(streak => streak.name === userName);

    // If no streak found, create a new streak object for the user
    if (!currentUserStreak) {
      currentUserStreak = {
        name: userName,
        streak: 0,
        practiceTimes: Array(7).fill("0"), // Array of 0's for practice time
      };
      streaks.push(currentUserStreak); // Add the new streak object to the list
      localStorage.setItem('streaks', JSON.stringify(streaks)); // Save the updated streaks list to localStorage
    }

    // Set the userStreak and practiceTimes state
    setUserStreak(currentUserStreak.streak);
    setPracticeTimes(currentUserStreak.practiceTimes);
  }, [userName]);

  // Function to handle practice time changes
  const handleTimeChange = (dayNumber, value) => {
    const newTimes = [...practiceTimes];
    const oldValue = newTimes[dayNumber];
    newTimes[dayNumber] = value;
    setPracticeTimes(newTimes);
    localStorage.setItem("times", JSON.stringify(newTimes));

    // Update streak based on new practice times
    let streak = userStreak;

    if (value !== "0") {
      // Logic for updating streak
      if (dayNumber > 0 && newTimes[dayNumber - 1] !== "0") {
        if (oldValue === "0") {
          streak += 1;
        }
      } else if (dayNumber > 0 && newTimes[dayNumber - 1] === "0") {
        streak = 1;
      } else {
        streak += 1;
      }
    } else {
      streak = 0; // Reset streak if practice time is 0
    }

    // Update streak and practiceTimes in localStorage
    saveStreak(streak, newTimes);
    setUserStreak(streak);
  };

  // Function to save streak and update the localStorage streaks list
  const saveStreak = (streak, practiceTimes) => {
    const streaksText = localStorage.getItem('streaks');
    let streaks = streaksText ? JSON.parse(streaksText) : [];

    // Find and update the current user's streak in the list
    const userIndex = streaks.findIndex(s => s.name === userName);
    if (userIndex !== -1) {
      streaks[userIndex].streak = streak;
      streaks[userIndex].practiceTimes = practiceTimes; // Update practiceTimes as well
    }

    // Save the updated streaks list to localStorage
    localStorage.setItem('streaks', JSON.stringify(streaks));
  };

  const handleGoogleDriveConnect = (event) => {
    event.preventDefault();
    navigate('/googledrive');
  };

  const handleExit = (event) => {
    event.preventDefault();
    navigate('/');
  };

  return (
    <main className="main-container-logpage">
      <h3 className="display-username">{userName}</h3>

      <div className="streak-and-g-drive">
        <h3 className="streak-element">Streak → {userStreak}</h3>
        <form className="google-drive-button" onSubmit={handleGoogleDriveConnect}>
          Google Drive
          <button id="google-drive-button" type="submit" className="btn btn-primary" style={{ backgroundColor: 'lightblue', borderColor: 'lightblue' }}>
            Connect
          </button>
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
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
              <tr key={day}>
                <td style={{ border: '1px solid black' }}>{day}</td>
                <td style={{ border: '1px solid black' }}>
                  <select value={practiceTimes[index]} onChange={(e) => handleTimeChange(index, e.target.value)} disabled={currentDayIndex != index}>
                    <option value="0">{practiceTimes[index] === "0" ? "0 minutes" : `${practiceTimes[index]} minutes`}</option>
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
