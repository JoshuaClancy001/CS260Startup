import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './logpage.css';

export function Logpage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState(localStorage.getItem('userName'));
  const [practiceTimes, setPracticeTimes] = useState(Array(7).fill("0"));
  const [userStreak, setUserStreak] = useState(0);
  const [allStreaks, setAllStreaks] = React.useState([])  // Default streak to 0 initially
  const [prevSat, setPrevSat] = useState(Boolean(localStorage.getItem("prevSat")) || false);
  const [quote, setQuote] = useState('this is a quote depending on who you ask just to test how long it can be and still fit on the screen');
  const [quoteAuthor, setQuoteAuthor] = useState('Author');
  const currentDayIndex = new Date().getDay();
  // UseEffect to load or create streak when component mounts
  
  async function getQuote() {
    fetch('https://quotes-api-self.vercel.app/quote')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setQuoteAuthor(data.author);
      })
      .catch();
  }
  
  
  async function getStreaks() {
    const response = await fetch('/api/streaks', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    });
    if (response?.status === 200) {
      const updatedStreaks = await response.json();
      setAllStreaks(updatedStreaks);
      let currentUserStreak = updatedStreaks.find(streak => streak.name === userName);
      setUserStreak(currentUserStreak.streak);
      setPracticeTimes(currentUserStreak.practiceTimes);
      }
  }

  
  
  useEffect(() => {


    async function fetchStreaks() {
      getStreaks();
    }
    getQuote();
    fetchStreaks();
  },[]);

  // Function to handle practice time changes
  const handleTimeChange = (dayNumber, value) => {
    const newTimes = [...practiceTimes];
    const oldValue = newTimes[dayNumber];
    newTimes[dayNumber] = value;
    setPracticeTimes(newTimes);
    // localStorage.setItem("times", JSON.stringify(newTimes));

    // Update streak based on new practice times
    let streak = userStreak;

    if (value !== "0") {
      
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
  
  
  
  
  
  async function saveStreak(streak, practiceTimes) {
    const streaksText = localStorage.getItem('streaks');
    let streaks = streaksText ? JSON.parse(streaksText) : [];

    const response = await fetch('/api/streak', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ name: userName, streak: streak, practiceTimes: practiceTimes }),
    });
    if (response?.status === 200) {
      const updatedStreaks = await response.json();
      for (let i = 0; i < updatedStreaks.length; i++) {
        if (updatedStreaks[i].name === userName) {
          setUserStreak(updatedStreaks[i].streak);
          setPracticeTimes(updatedStreaks[i].practiceTimes);
        }
      }
    }
  

    // Save the updated streaks list to localStorage
    // localStorage.setItem('streaks', JSON.stringify(streaks));
  }

  async function handleGoogleDriveConnect(){
    event.preventDefault();
    getQuote();
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
          New Quote
          <button id="google-drive-button" type="submit" className="btn btn-primary" style={{ backgroundColor: 'lightblue', borderColor: 'lightblue' }}>
            Submit
          </button>
          
        </form>
        <div className='quote'>
            {quote}
            <p> -{quoteAuthor}</p>
          </div>
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
                  <select value={practiceTimes[index]} onChange={(e) => handleTimeChange(index, e.target.value)} >
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
